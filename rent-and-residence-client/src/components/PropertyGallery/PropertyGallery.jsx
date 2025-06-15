import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lightgallery.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const PropertyGallery = ({ images }) => {
  /*   const onInit = () => {
    console.log("lightGallery has been initialized");
  }; */

  return (
    <div>
      <LightGallery
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        elementClassNames="masonry-gallery"
      >
        {images?.map((image, i) => (
          <a href={image} key={i} data-thumbnail={image}>
            <img
              src={image}
              alt={i}
              style={{
                width: "100%",
                marginBottom: "10px",
                borderRadius: "8px",
                objectFit: "cover", // Or 'contain' depending on your goal
              }}
            />
          </a>
        ))}
      </LightGallery>
    </div>
  );
};

export default PropertyGallery;
