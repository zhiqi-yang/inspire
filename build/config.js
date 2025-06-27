const path = require("path");

const root = path.resolve(__dirname, "..");
const src = path.join(root, "/src");
const dist = path.join(root, "/dist");
const static = path.join(root, "/static");
const build = path.join(root, "/build");

const env = process.env.NODE_ENV?.trim();
const analyze = process.env.ANALYZE === "true";

const CONTEXT_PATH = "";

module.exports = {
  CONTEXT_PATH,
  PUBLIC_PATH: env === "development" ? "/" : "./",

  root,
  src,
  dist,
  static,
  build,

  env,
  analyze,
};
