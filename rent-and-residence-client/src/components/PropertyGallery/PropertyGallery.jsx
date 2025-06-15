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
    <LightGallery
      speed={500}
      plugins={[lgThumbnail, lgZoom]}
      elementClassNames="masonry-gallery"
    >
      {images?.map((image, i) => (
        <a href={image} key={i} data-thumbnail={image}>
          <img
            className="w-[100%] lg:h-[300px] h-[230px] rounded-2xl mb-10"
            src={image}
            alt={i}
            /*  style={{
              width: "100%",
              height: "300px",

              // objectFit: "cover",
              borderRadius: "8px",
              marginBottom: "10px",
            }} */
          />
        </a>
      ))}
    </LightGallery>
  );
};

export default PropertyGallery;
