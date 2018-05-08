if (process.env.NODE_ENV !== "production") {
  module.exports = require("./lib/dev");
} else {
  module.exports = require("./lib/prod");
}