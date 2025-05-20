import React, { useState } from "react";
import Masonry from "react-masonry-css";
import "./Gallery.css";

const images = [
  { id: "MiImage01" },
  { id: "MyImage02" },
  { id: "MyImage03" },

  { id: "Horizontal02_myo4gd" },
  { id: "Vertical05_clcmdf" },
  { id: "Horizontal03_yvv1g5" },

  { id: "MyImage04" },

  { id: "Horizontal01_1_f05z8w" },


  // se pueden ir agregando más aquí
];

const Gallery = () => {
  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (id) => {
    setSelectedImage(id);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.map((img) => (
          <img
            key={img.id}
            src={`https://res.cloudinary.com/${cloudName}/image/upload/${img.id}.jpg`}
            alt={img.id}
            className="gallery-img"
            onClick={() => handleImageClick(img.id)}
          />
        ))}
      </Masonry>

      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <img
            src={`https://res.cloudinary.com/${cloudName}/image/upload/${selectedImage}.jpg`}
            alt={selectedImage}
            className="modal-img"
          />
        </div>
      )}
    </>
  );
};

export default Gallery;
