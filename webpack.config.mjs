import path from "path";
import WebExtPlugin from "web-ext-plugin";

const __dirname = import.meta.dirname;

export default {
  target: "web",
  node: false,
  mode: "development",

  devtool: "inline-source-map",

  entry: {
    "background_script": "./src/background_script.ts",
    "content_script": "./src/content_script.ts",
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },

  resolve: {
    extensions: [ ".tsx", ".ts", ".js" ],
  },

  output: {
    path: path.resolve(__dirname, "addon"),
    filename: "[name].js",
  },

  plugins: [
    new WebExtPlugin({
      artifactsDir: path.resolve(__dirname, "web-ext-artifacts"),
      buildPackage: true,
      overwriteDest: true,
      sourceDir: path.resolve(__dirname, "addon"),
    }),
  ],
};