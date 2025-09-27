const express = require("express");
const app = express();
const cors = require("cors");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const { MongoClient, ServerApiVersion } = require("mongodb");
const { ObjectId } = require("mongodb");
const { fs } = require("fs");
const multer = require("multer");
const imagekit = require("./configs/imageKit");

const port = process.env.PORT || 5000;

// Middlewares
app.use(
  cors({
    origin: ["http://localhost:5173", "https://rent-residence-3a842.web.app"],
    credentials: true,
  })
);
app.use(express.json()); // for application/json
app.use(express.urlencoded({ extended: true })); // for application/x-www-form-urlencoded

// MongoDB Setup
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@atlascluster.sztfigr.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// Multer Setup
const storage = multer.memoryStorage();
const upload = multer({ storage });

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );

    // Property Related Api's
    const propertyCollection = client
      .db("wp_residence_DB")
      .collection("properties");

    const userCollection = client.db("wp_residence_DB").collection("users");

    const reviewCollection = client.db("wp_residence_DB").collection("reviews");

    const cartCollection = client.db("wp_residence_DB").collection("carts");

    const blogCollection = client
      .db("wp_residence_DB")
      .collection("blogsCollection");

    const paymentCollection = client
      .db("wp_residence_DB")
      .collection("payments");

    const favouriteCollection = client
      .db("wp_residence_DB")
      .collection("favourites");

    // JWT Related API
    app.post("/jwt", async (req, res) => {
      const user = req.body;
      console.log(user);

      const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "1h",
      });
      // console.log(token);
      res.send({ token });
    });

    // middlewares
    const verifyToken = (req, res, next) => {
      const authHeader = req.headers["authorization"];
      // console.log("Inside verify Token", authHeader);

      const token = authHeader && authHeader.split(" ")[1];

      // console.log(token);

      if (!token) return res.status(401).send({ message: "No token provided" });

      jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) {
          return res.status(403).send({ message: "forbidden access" });
        }

        req.decoded = decoded;

        next();
      });
    };

    // Verify Admin whether he is Admin or not. If not then don't let him Admin controlled info
    const verifyAdmin = async (req, res, next) => {
      const email = req.decoded.email;
      console.log("Verify Admin Email", email);

      const query = { email: email };
      const user = await userCollection.findOne(query);
      // console.log(user);

      const isAdmin = user?.role === "Admin";

      if (!isAdmin) {
        return res.status(403).send({ message: "forbidden access" });
      }

      next();
    };

    // Verify Admin whether he is Admin or not. If not then don't let him Admin controlled info
    const verifyAgent = async (req, res, next) => {
      const email = req.decoded.email;
      // console.log("Verify Agent Email", email);

      const query = { email: email };
      const user = await userCollection.findOne(query);
      // console.log(user);

      const isAdmin = user?.role === "Agent";

      if (!isAdmin) {
        return res.status(403).send({ message: "forbidden access" });
      }
      // console.log("Verify Agent Email", email);
      next();
    };

    // Check what is user's role
    app.get("/api/user/role/:email", verifyToken, async (req, res) => {
      const email = req.params.email;

      console.log(email, req.decoded.email);

      if (email !== req.decoded.email) {
        return res.status(403).send({ message: "forbidden access" });
      }

      const query = { email: email };

      const user = await userCollection.findOne(query);

      // console.log(user);

      let role;

      if (user?.role === "Admin") {
        res.send({ role: "Admin" });
      } else if (user?.role === "Agent") {
        res.send({ role: "Agent" });
      } else {
        res.send({ role: "User" });
      }
    });

    // Get all the properties
    app.get("/api/properties", async (req, res) => {
      // const { parseInt(page), parseInt(limit) } = req.query;
      // console.log(req.query.page);

      const page = parseInt(req.query.page) || 0;
      const limit = parseInt(req.query.limit) || 4;
      const skip = page * limit;

      console.log("Query parameters received:", { page, limit, skip });

      const allProperties = await propertyCollection
        .find()
        .skip(skip)
        .limit(limit)
        .toArray();

      const totalCount = await propertyCollection.estimatedDocumentCount();
      // console.log(totalCount);

      const favourites = await favouriteCollection.find().toArray();
      const favouritePropertyIds = favourites.map(
        (EachProp) => EachProp.propertyIds
      );

      res.send({ allProperties, favouritePropertyIds, totalCount });
    });

    // Get an individual Property
    app.get("/api/properties/:id", async (req, res) => {
      const id = req.params.id;
      // console.log(id);

      const query = { _id: new ObjectId(id) };

      const result = await propertyCollection.find(query).toArray();

      res.send(result);
    });

    // Get all the users
    app.get("/api/users", verifyToken, async (req, res) => {
      // console.log(req.headers);

      const result = await userCollection.find().toArray();
      res.send(result);
    });

    // Get an individual user
    app.get("/api/users/:id", async (req, res) => {
      const id = req.params.id;
      // console.log(id);

      // Validate the id
      if (!ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid ID Format" });
      }

      const query = { _id: new ObjectId(id) };

      const result = await userCollection.findOne(query);

      res.send(result);
    });

    // Get each Agent Owned Property
    app.get("/api/agentOwnedProperty/:id", async (req, res) => {
      const id = req.params.id;
      console.log(id);

      const query = { ownerId: id };
      const result = await propertyCollection.find(query).toArray();

      res.send(result);
    });

    // Get all the blogs
    app.get("/api/blogs", async (req, res) => {
      const result = await blogCollection.find().toArray();
      res.send(result);
    });

    // Get all the saved properties
    app.get("/api/favouriteProperties/:id", verifyToken, async (req, res) => {
      // const result = await favouriteCollection.find().toArray();
      // console.log(result);
      const userId = req.params._id;
      /* const findTheCollection = await favouriteCollection.findOne({
        _id: new ObjectId(userId),
      }); */
      // console.log(findTheCollection);

      const onlyTheFavouritesObj = await favouriteCollection
        .aggregate([
          {
            $unwind: "$propertyIds",
          },
          {
            $addFields: {
              propertyIdObj: { $toObjectId: "$propertyIds" },
            },
          },
          {
            $lookup: {
              from: "properties",
              localField: "propertyIdObj",
              foreignField: "_id",
              as: "propertyItems",
            },
          },
          {
            $unwind: "$propertyItems",
          },
          /* {
            $replaceWith: {
              eachProp: "$propertyItems",
            },
          }, */
          {
            $project: {
              _id: 0,
              propertyItems: 1,
            },
          },
        ])
        .toArray();

      res.send(onlyTheFavouritesObj);
    });

    // Fetch the current user
    app.get("/api/auth/me", async (req, res) => {
      const userEmail = req.query;
      // console.log(userEmail.email);

      const query = { email: userEmail?.email };
      const result = await userCollection.findOne(query);
      res.send(result);
    });

    // Get all the reviews
    app.get("/api/reviews", async (req, res) => {
      const result = await reviewCollection.find().toArray();
      res.send(result);
    });

    // Fetch specific property reviews
    app.get("/api/reviews/:propertyId", verifyToken, async (req, res) => {
      const propertyId = req.params.propertyId;
      // console.log(propertyId);

      const query = { propertyId: propertyId };

      const result = await reviewCollection.find(query).toArray();

      res.send(result);
    });

    // Get all the cart items of logged in user
    app.get("/api/carts", async (req, res) => {
      const query = { userEmail: req.query.userEmail };
      // console.log(req.query.userEmail);

      const cartItems = await cartCollection.find(query).toArray();
      const propertyIds = cartItems.map(
        (item) => new ObjectId(item.propertyId)
      );

      // console.log(propertyIds);

      const cartProperties = await propertyCollection
        .find({
          _id: { $in: propertyIds },
        })
        .toArray();

      res.send({
        cartProperties: cartProperties,
        cartItems: cartItems,
      });
    });

    // Get the payment history
    app.get("/api/payment/:email", verifyToken, async (req, res) => {
      const query = { email: req.params.email };

      if (req.params.email !== req.decoded.email) {
        return res.status(403).send({ message: "forbidden access" });
      }

      const result = await paymentCollection.find(query).toArray();
      res.send(result);
    });

    // Get the payment history
    app.get(
      "/api/allPayments/:email",
      verifyToken,
      verifyAdmin,
      async (req, res) => {
        // const query = { email: req.params.email };

        if (req.params.email !== req.decoded.email) {
          return res.status(403).send({ message: "forbidden access" });
        }

        const result = await paymentCollection.find().toArray();
        res.send(result);
      }
    );

    // Add a User
    app.post("/api/auth/register", async (req, res) => {
      const newUser = req.body;

      // console.log(newUser.email);
      const { email } = newUser;
      // console.log(email);

      const query = { email: email };

      const findIfExisting = await userCollection.findOne(query);

      // console.log(findIfExisting);
      if (!findIfExisting) {
        console.log("User Injected");
        const result = await userCollection.insertOne(newUser);
        res.send(result);
      } else {
        return res.send({ message: "User already exists", insertedId: null });
        console.log("Haven't Injected");
      }
    });

    // Add a Property
    app.post(
      "/api/properties/:id",
      upload.array("images"),
      verifyToken,
      verifyAgent,
      async (req, res) => {
        const property = req.body;
        const images = req.files;
        const id = req.params.id;

        // console.log(property);

        const {
          title,
          description,
          price,
          propertyStatus,
          approval,
          listedIn,
          afterPriceLabel,
          category,
          address,
          countyORstate,
          city,
          neighborhood,
          zip,
          country,
          energyClass,
          energyIndex,
          sizeInMeter,
          lotInInch,
          rooms,
          bedrooms,
          bathrooms,
          yearBuilt,
          garages,
          garageSize,
          availableFrom,
          basement,
          externalConstruction,
          roofing,
          ownerNote,
          equippedKitchen,
          gym,
          laundry,
          mediaRoom,
          backYard,
          basketballCourt,
          garageAttached,
          hotBath,
          pool,
          centralAir,
          electricity,
          heating,
          naturalGas,
          ventilation,
          water,
          chairAccessible,
          elevator,
          fireplace,
          smokeDetectors,
          washerDryer,
          wifi,
        } = req.body;

        const uploadPromises = images.map((img) => {
          return imagekit.upload({
            file: img?.buffer,
            fileName: `${img.originalname}-${Date.now()}`,
          });
        });

        // Wait to upload all the images
        const uploadResults = await Promise.all(uploadPromises);

        const imgUrls = uploadResults.map((result) => result.url);

        const propertyWithImg = {
          images: imgUrls,
          ownerId: id,
          title,
          description,
          price,
          afterPriceLabel,
          category,
          propertyStatus,
          approval,
          listedIn,
          address: {
            street: address,
            city,
            state: countyORstate,
            zip,
            country,
          },

          amenities: {
            equippedKitchen: equippedKitchen,
            gym: gym,
            laundry: laundry,
            mediaRoom: mediaRoom,
            backYard: backYard,
            basketballCourt: basketballCourt,
            garageAttached: garageAttached,
            hotBath: hotBath,
            pool: pool,
            centralAir: centralAir,
            electricity: electricity,
            heating: heating,
            naturalGas: naturalGas,
            ventilation: ventilation,
            water: water,
            chairAccessible: chairAccessible,
            elevator: elevator,
            fireplace: fireplace,
            smokeDetectors: smokeDetectors,
            washerDryer: washerDryer,
            wifi: wifi,
          },

          propertyDetails: {
            rooms,
            bedrooms,
            bathrooms,

            sizeInMeter,
            lotInInch,

            yearBuilt,
            availableFrom,
            basement,
            externalConstruction,
            roofing,
          },
          garages,
          garageSize,
          ownerNote,
          energyClass,
          energyIndex,
          neighborhood,
        };

        const result = await propertyCollection.insertOne(propertyWithImg);

        res.send(result);
      }
    );

    // Add a review
    app.post("/api/reviews", verifyToken, upload.none(), async (req, res) => {
      const reviewText = req.body;

      // console.log(req.body);

      const result = await reviewCollection.insertOne(reviewText);

      res.send(result);
    });

    // Add to Cart
    app.post("/api/carts", verifyToken, async (req, res) => {
      const userEmail = req.query.userEmail;
      const query = { userEmail: userEmail };
      const cartItem = req.body;

      const cartItems = await cartCollection.find(query).toArray();
      // console.log(cartItems);

      const filteredProperties = cartItems.filter(
        (item) => item.propertyId === cartItem.propertyId
      );

      // console.log(filteredProperties);

      if (filteredProperties.length > 0) {
        // console.log("Sorry, the item is already in the cart");
        res.status(409).send("Item already exists in the cart.");
      } else {
        const result = await cartCollection.insertOne(cartItem);
        res.send(result);
        console.log("This item is added in the cart");
      }
    });

    // Get Comparison Properties
    app.post("/api/comparisonProperties", async (req, res) => {
      const propIds = req.body;
      // console.log(propIds);

      // const query = { _id: new ObjectId(id) };

      const result = await propertyCollection
        .find({
          _id: { $in: propIds?.map((id) => new ObjectId(id)) },
        })
        .toArray();

      res.send(result);
    });

    // Add to Favourites
    app.patch(
      "/api/:userId/favourites/:propertyId",

      async (req, res) => {
        const { userId, propertyId } = req.params;

        // console.log(userId, propertyId);

        const user = await favouriteCollection.findOne({
          _id: new ObjectId(userId),
        });

        let result;

        // If exists, remove it. Otherwise Add it
        if (user?.propertyIds?.includes(propertyId)) {
          result = await favouriteCollection.findOneAndUpdate(
            { _id: new ObjectId(userId) },
            { $pull: { propertyIds: propertyId } },
            { returnDocument: "after", upsert: true }
          );
        } else {
          result = await favouriteCollection.findOneAndUpdate(
            { _id: new ObjectId(userId) },
            { $addToSet: { propertyIds: propertyId } },
            { returnDocument: "after", upsert: true }
          );
        }

        res.send(result);
      }
    );

    // Update a property Info
    app.patch("/api/properties/:id", verifyToken, async (req, res) => {
      const id = req.params.id;

      const updatedText = req.body;

      const filter = { _id: new ObjectId(id) };

      const options = { upsert: true };

      const updatedProperty = {
        $set: {
          title: updatedText.title,
          description: updatedText.description,
          price: updatedText.price,
          listingType: updatedText.listingType,
          images: updatedText.images,
          status: updatedText.status,
          isFeatured: updatedText.isFeatured,
        },
      };

      const result = await propertyCollection.updateOne(
        filter,
        updatedProperty,
        options
      );

      res.send(result);
    });

    // update an user to agent/admin/user
    app.patch(
      "/api/updateUserRole/:id",
      verifyToken,
      verifyAdmin,
      async (req, res) => {
        const userId = req.params.id;
        const newRole = req.body.role;

        // console.log(newRole);
        const filter = { _id: new ObjectId(userId) };

        const updatedRole = {
          $set: {
            role: newRole,
          },
        };

        // console.log(userId, newRole);
        // console.log(userId);

        const result = await userCollection.updateOne(filter, updatedRole);

        res.send(result);
      }
    );

    // update a payment
    app.patch(
      "/api/updatePaymentStatus/:id",
      verifyToken,
      verifyAdmin,
      async (req, res) => {
        const paymentId = req.params.id;
        const approvalText = req.body.role;

        console.log(paymentId, approvalText);
        const filter = { _id: new ObjectId(paymentId) };

        const updatedApproval = {
          $set: {
            status: approvalText,
          },
        };

        // console.log(userId, newRole);
        // console.log(userId);

        const result = await paymentCollection.updateOne(
          filter,
          updatedApproval
        );

        res.send(result);
      }
    );

    // Update property approval
    app.patch(
      "/api/property/approvalUpdate/:id",
      verifyToken,
      verifyAdmin,
      async (req, res) => {
        const id = req.params.id;
        const approvalText = req.body.approval;
        // console.log(approvalText, id);

        const filter = { _id: new ObjectId(id) };

        const options = { upsert: true };
        const updatedApproval = {
          $set: {
            approval: approvalText,
          },
        };

        // console.log(updatedApproval);

        const result = await propertyCollection.updateOne(
          filter,
          updatedApproval
        );

        res.send(result);
      }
    );

    // Update an user Info
    app.put(
      "/api/user/:id",
      verifyToken,
      // identify the image by it's name
      upload.single("profileImage"),
      async (req, res) => {
        const id = req.params.id;
        const file = req?.file;

        console.log("req-body:", req.body);
        console.log("req-file:", req.file);

        const {
          name,
          email,
          phone,
          role,
          bio,
          profileImage,
          facebookUrl,
          instagramUrl,
          linkedinUrl,
          pinterestUrl,
          twitterUrl,
          websiteUrl,
        } = req.body;

        // Update the data
        const updateProfile = {
          name,
          email,
          phone,
          role,
          bio,
          facebookUrl,
          instagramUrl,
          linkedinUrl,
          pinterestUrl,
          twitterUrl,
          websiteUrl,
        };

        // Upload to ImageKit if the file available
        if (req.file) {
          const imgUpload = await imagekit.upload({
            file: file?.buffer,
            fileName: `user-${Date.now()}`,
          });
          console.log(imgUpload.url);

          // Push the url inside updateProfile object
          updateProfile.profileImage = imgUpload.url;
        } else {
          console.log("Doesn't get the file");
        }

        // Find & Update user in MongoDB
        const result = await userCollection.findOneAndUpdate(
          { _id: new ObjectId(id) },
          { $set: updateProfile },
          { returnDocument: "after" } // So that we can the updated one not old one
        );

        res.json(result.value);
      }
    );

    // Delete a Property
    app.delete(
      "/api/properties/:id",
      verifyToken,
      verifyAdmin,
      async (req, res) => {
        const id = req.params.id;

        const query = { _id: new ObjectId(id) };

        const result = await propertyCollection.deleteOne(query);

        res.send(result);
      }
    );

    // Delete an User
    app.delete("/api/users/:id", verifyToken, verifyAdmin, async (req, res) => {
      const id = req.params.id;
      // console.log(id);

      const query = { _id: new ObjectId(id) };

      const result = await userCollection.deleteOne(query);

      res.send(result);
    });

    // Remove the property from cart
    app.delete("/api/carts", verifyToken, async (req, res) => {
      const deletedPropertyId = req.query.propertyId;

      const userEmail = req.query.userEmail;
      const query = { userEmail: userEmail };
      // console.log(req.query.userEmail);

      const cartItems = await cartCollection.find(query).toArray();

      const matchTheProperty = { propertyId: deletedPropertyId };

      const result = await cartCollection.deleteOne(matchTheProperty);

      res.send(result);
    });

    // Stripe
    app.post("/api/create-payment-intent", async (req, res) => {
      const { price } = req.body;

      const amount = parseInt(price * 100);

      const paymentIntent = await stripe.paymentIntents.create({
        amount: amount,
        currency: "usd",
        payment_method_types: ["card"],
      });

      res.send({ clientSecret: paymentIntent.client_secret });
    });

    // Save payment & clear cart to database
    app.post("/api/payment", async (req, res) => {
      const payment = req.body;

      const paymentResult = await paymentCollection.insertOne(payment);

      // console.log("Payment Info", payment);

      // Delete each item from the cart
      const query = {
        _id: {
          $in: payment.cartIds.map((id) => new ObjectId(id)),
        },
      };

      const removeFromCart = await cartCollection.deleteMany(query);
      res.send({ paymentResult, removeFromCart });
    });

    // Statistic for admin dashboard
    app.get("/api/admin-stats", verifyToken, verifyAdmin, async (req, res) => {
      const registeredUsers = await userCollection.estimatedDocumentCount();
      const propertyItems = await propertyCollection.estimatedDocumentCount();

      const approvedProperties = await propertyCollection
        .find({
          approval: "Approved",
        })
        .toArray();

      /*  const totalPayment = await paymentCollection.find().toArray();
      const revenue = totalPayment.reduce(
        (total, payment) => total + payment.price,
        0
      ); */

      const result = await paymentCollection
        .aggregate([
          {
            $group: {
              _id: null,
              totalRevenue: {
                $sum: "$price",
              },
            },
          },
        ])
        .toArray();

      const revenue = result.length > 0 ? result[0].totalRevenue : 0;

      res.send({ revenue, registeredUsers, propertyItems, approvedProperties });
    });

    // Order Statistics using aggregate pipeline
    app.get("/api/order-stats", verifyToken, verifyAdmin, async (req, res) => {
      const result = await paymentCollection
        .aggregate([
          {
            $unwind: "$propertyIds",
          },
          {
            $addFields: {
              propertyIdObj: { $toObjectId: "$propertyIds" },
            },
          },
          {
            $lookup: {
              from: "properties",
              localField: "propertyIdObj",
              foreignField: "_id",
              as: "propertyItems",
            },
          },
          {
            $unwind: "$propertyItems",
          },
          {
            $group: {
              _id: "$propertyItems.category",
              quantity: { $sum: 1 },
              totalRevenue: { $sum: { $toDouble: "$propertyItems.price" } },
            },
          },
          {
            $project: {
              _id: 0,
              category: "$_id",
              quantity: "$quantity",
              revenue: "$totalRevenue",
            },
          },
        ])
        .toArray();

      res.send(result);

      // console.log(result);
    });
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}

run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello from Rent & Residence");
});

app.listen(port, () => {
  console.log(`The Site is running at ${port}`);
});
