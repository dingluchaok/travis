const Path = require("path");
module.exports = {
    entry: "./src/index.js",
    output: {
        path: Path.join(__dirname, "dist"),
        filename: "[name].js"
    },
    mode: "production"
}