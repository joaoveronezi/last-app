const withImages = require("next-images");
const withFonts = require("next-fonts");
const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([[withImages, { esModule: true }], [withFonts]]);
