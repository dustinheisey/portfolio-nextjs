const withPlugins = require("next-compose-plugins");
const images = require("next-images");
const sass = require("@zeit/next-sass");
const withOffline = require("next-offline");

module.exports = withPlugins([images, sass, withOffline]);
