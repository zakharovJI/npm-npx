#!/usr/bin/env node

// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require("fs-extra");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { exec } = require("child_process");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require("../viewconfig.json");

if (Object.keys(config).includes("colors")) {
  const colorFile = path.join(process.argv[2], "/colors.css");
  let colorData = ":root {";

  Object.entries(config.colors).forEach((color) => {
    const [key, value] = color;
    colorData = colorData.concat(`\n\t--color-${key}: ${value};`);
  });
  colorData = colorData.concat(`\n}`);

  fs.writeFile(colorFile, colorData, (err2) => err2 || true);
}
