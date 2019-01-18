const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const pathToPhaser = path.join(__dirname, "/node_modules/phaser/");
const build_dir = "build";

module.exports = {
    entry: {
        index: "./src/index.ts"
    },
    output: {
        path: path.resolve(__dirname, build_dir),
        filename: "bundle.js"
    },
    module: {
        rules: [
            { test: /\.ts$/, loader: "ts-loader", exclude: "/node_modules/" },
            { test: /phaser\.js$/, loader: "expose-loader?Phaser" }
        ]
    },
    plugins: [new CleanWebpackPlugin(build_dir)],
    devServer: {
        contentBase: path.resolve(__dirname, "./"),
        publicPath: `/${build_dir}/`,
        host: "127.0.0.1",
        port: 8080,
        open: true
    },
    resolve: {
        extensions: [".ts", ".js"],
        alias: {
            phaser: path.join(pathToPhaser, "dist/phaser.js")
        }
    }
};
