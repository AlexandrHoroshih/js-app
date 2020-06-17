const path = require("path");
const dotenv = require("dotenv-defaults");
const confme = require("confme");

const ENV_PATH = path.resolve(__dirname, "./.env");
const ENV_DEFAULTS_PATH = path.resolve(__dirname, "./.env.defaults");

// load envs from .env's
dotenv.config({
  path: ENV_PATH,
  encoding: "utf8",
  defaults: ENV_DEFAULTS_PATH,
});

const APP_CONF_PATH = path.resolve(__dirname, "./app-config.json");
const APP_CONF_SCHEME_PATH = path.resolve(
  __dirname,
  "./app-config-schema.json"
);

const finalConf = confme(APP_CONF_PATH, APP_CONF_SCHEME_PATH);

module.exports = finalConf;
