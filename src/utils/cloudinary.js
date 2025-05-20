// src/utils/cloudinary.js

const CLOUD_NAME = 'dcpu32fn5'; // reemplazá con tu cloud name

export const getCloudinaryImageUrl = (publicId, options = '') => {
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${options}/${publicId}`;
};

// Ejemplo de uso:
// getCloudinaryImageUrl("mi-carpeta/foto1.jpg", "w_800,q_auto")
