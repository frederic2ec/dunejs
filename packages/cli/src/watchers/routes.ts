import * as chokidar from "chokidar";
import * as Path from "path";
const consola = require("consola");

import generateRoutes from "../generators/routes";
import { SingleBar } from "cli-progress";

export default (options: object | any, watcherBar: SingleBar) => {
  const config = require(Path.join(process.cwd(), ".dunejs/config"));
  const srcDir = config.srcDir || options.config || "./";

  const appFolder = Path.join(process.cwd(), srcDir, "./pages/");

  watcherBar.increment();
  function onChange(options: object) {
    consola.info("Pages changed, rebuild started !");
    generateRoutes(options, null);
  }

  chokidar
    .watch(appFolder, {
      ignoreInitial: true,
    })
    .on("add", () => {
      onChange(options);
    })
    .on("unlink", () => {
      onChange(options);
    })
    .on("unlinkDir", () => {
      onChange(options);
    })
    .on("addDir", () => {
      onChange(options);
    });
};
