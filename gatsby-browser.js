require('typeface-roboto');
require('typeface-raleway');
require('typeface-open-sans');

const objectFitImages = require('object-fit-images');

exports.onInitialClientRender = () => {
  objectFitImages();
};
