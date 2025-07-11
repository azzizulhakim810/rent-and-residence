const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");
const { ObjectId } = require("mongodb");
const { fs } = require("fs");
const multer = require("multer");
const imagekit = require("./configs/imageKit");

const port = process.env.PORT || 5000;

// Middlewares
app.use(cors());
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
    const propertiesCollection = client
      .db("wp_residence_DB")
      .collection("properties");

    const usersCollection = client.db("wp_residence_DB").collection("users");

    const reviewCollection = client.db("wp_residence_DB").collection("reviews");

    const blogsCollection = client
      .db("wp_residence_DB")
      .collection("blogsCollection");

    // Get all the properties
    app.get("/api/properties", async (req, res) => {
      const result = await propertiesCollection.find().toArray();
      res.send(result);
    });

    // Get an individual Property
    app.get("/api/properties/:id", async (req, res) => {
      const id = req.params.id;
      // console.log(id);

      const query = { _id: new ObjectId(id) };

      const result = await propertiesCollection.find(query).toArray();

      res.send(result);
    });

    // Get all the users
    app.get("/api/users", async (req, res) => {
      const result = await usersCollection.find().toArray();
      res.send(result);
    });

    // Get an individual user
    app.get("/api/users/:id", async (req, res) => {
      const id = req.params.id;
      // console.log(id);

      const query = { _id: new ObjectId(id) };

      const result = await usersCollection.find(query).toArray();

      res.send(result);
    });

    // Get each Agent Owned Property
    app.get("/api/agentOwnedProperty/:id", async (req, res) => {
      const id = req.params.id;
      console.log(id);

      const query = { ownerId: id };
      const result = await propertiesCollection.find(query).toArray();

      res.send(result);
    });

    // Get all the blogs
    app.get("/api/blogs", async (req, res) => {
      const result = await blogsCollection.find().toArray();
      res.send(result);
    });

    // Get all the saved properties
    app.get("/api/savedProperties", async (req, res) => {
      const result = await favouriteCollection.find().toArray();
      res.send(result);
    });

    // Get all the reviews
    app.get("/api/reviews", async (req, res) => {
      const result = await reviewCollection.find().toArray();
      res.send(result);
    });

    // Fetch the current user
    app.get("/api/auth/me", async (req, res) => {
      const userEmail = req.query;
      // console.log(userEmail.email);

      const query = { email: userEmail?.email };
      const result = await usersCollection.findOne(query);
      res.send(result);
    });

    // Add a User
    app.post("/api/auth/register", async (req, res) => {
      const newUser = req.body;

      // console.log(newUser.email);
      const { email } = newUser;
      // console.log(email);

      const query = { email: email };

      const findIfExisting = await usersCollection.findOne(query);

      // console.log(findIfExisting);
      if (!findIfExisting) {
        const result = await usersCollection.insertOne(newUser);
        res.send(result);
        console.log("User Injected");
      } else {
        console.log("Haven't Injected");
      }
    });

    // Add a Property
    app.post("/api/properties", async (req, res) => {
      const property = req.body;

      const result = await propertiesCollection.insertOne(property);

      res.send(result);
    });

    // Update a property Info
    app.patch("/api/properties/:id", async (req, res) => {
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

      const result = await propertiesCollection.updateOne(
        filter,
        updatedProperty,
        options
      );

      res.send(result);
    });

    // Update an user Info
    app.put(
      "/api/user/:id",
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

        // Update user in MongoDB
        const result = await usersCollection.findOneAndUpdate(
          { _id: new ObjectId(id) },
          { $set: updateProfile },
          { returnDocument: "after" }
        );

        res.json(result.value);
      }
    );

    // Delete a Property
    app.delete("/api/properties/:id", async (req, res) => {
      const id = req.params.id;

      const query = { _id: new ObjectId(id) };

      const result = await propertiesCollection.deleteOne(query);

      res.send(result);
    });

    // Delete an User
    app.delete("/api/user/:id", async (req, res) => {
      const id = req.params.id;

      const query = { _id: new ObjectId(id) };

      const result = await usersCollection.deleteOne(query);

      res.send(result);
    });
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}

run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello from WP Residence");
});

app.listen(port, () => {
  console.log(`The Site is running at ${port}`);
});
