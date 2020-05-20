const cliProgress = require("cli-progress");
const chalk = require("chalk");
const consola = require("consola");

const generateFolder = require("./folder");
const generateConfig = require("./config");
const generatePlugins = require("./plugins");
const generateRoutes = require("./routes");
const generateLayouts = require("./layouts");
const generateCss = require("./css");

module.exports = function generate(options) {
  const generatorBar = new cliProgress.SingleBar({
    format:
      "Generation in progress... |" +
      chalk.red("{bar}") +
      "| {percentage}% || {value}/{total}",
    barCompleteChar: "\u2588",
    barIncompleteChar: "\u2591",
    hideCursor: true
  });

  generatorBar.start(6, 0);

  generateFolder(generatorBar);
  generateConfig(options, generatorBar);
  generateRoutes(options, generatorBar);
  generateLayouts(options, generatorBar);
  generateCss(options, generatorBar);
  generatePlugins(options, generatorBar);
  generatorBar.stop();
  consola.success("Generation completed !");
};
