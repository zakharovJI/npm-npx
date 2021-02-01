#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const https = require('https');
const { exec } = require('child_process');

const packageJson = require('../package.json');

const scripts = `"start": "cross-env NODE_ENV=development webpack-dev-server -d",
    "build": "cross-env NODE_ENV=production webpack -p",
    "test": "jest"`;


const jestConfig = `"license": "ISC",
  "jest": {
    "moduleFileExtensions": [
      "js",
      "jsx"
    ],
    "moduleDirectories": [
      "node_modules"
    ],
    "setupFiles": [
      "<rootDir>/src/tests/setup.js"
    ],
    "moduleNameMapper": {
      "\\\\.(css|styl|less|sass|scss)$": "identity-obj-proxy"
    },
    "transform": {
      "^.+\\\\.js$": "babel-jest",
      "^.+\\\\.jsx$": "babel-jest",
      "\\\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/src/tests/__mock__/fileTransformer.js"
    }
  }`;

/**
 * we pass the object key dependency || devdependency to this function
 * @param {object} deps object key that we want to extract
 * @returns {string} a string of 'dependencies@version'
 * that we can attach to an `npm i {value}` to install
 * every dep the exact version speficied in package.json
 */
const getDeps = deps =>
  Object.entries(deps)
    .map(dep => `${dep[0]}@${dep[1]}`)
    .toString()
    .replace(/,/g, ' ')
    .replace(/^/g, '')
    // exclude the plugin only used in this file, nor relevant to the boilerplate
    .replace(/fs-extra[^\s]+/g, '');

console.log('Initializing project..');

// create folder and initialize npm
exec(
  `mkdir ${packageJson.name} && cd ${packageJson.name} && npm init -f`,
  (initErr, initStdout, initStderr) => {
    if (initErr) {
      console.error(`Everything was fine, then it wasn't:
    ${initErr}`);
      return;
    }
    const packageJSON = `${packageJson.name}/package.json`;
    // replace the default scripts, with the webpack scripts in package.json
    fs.readFile(packageJSON, (err, file) => {
      if (err) throw err;
      const data = file
        .toString()
        .replace('"test": "echo \\"Error: no test specified\\" && exit 1"', scripts)
        .replace('"license": "ISC"', jestConfig);
      fs.writeFile(packageJSON, data, err2 => err2 || true);
    });

    const filesToCopy = ['next.config.js','postcss.config.js','tsconfig.json'];

    for (let i = 0; i < filesToCopy.length; i += 1) {
      fs
        .createReadStream(path.join(__dirname, `../${filesToCopy[i]}`))
        .pipe(fs.createWriteStream(`${packageJson.name}/${filesToCopy[i]}`));
    }

    fs
      .createReadStream(path.join(__dirname, `../${'.gitignorelocal'}`))
      .pipe(fs.createWriteStream(`${packageJson.name}/${'.gitignore'}`));

    // fs
    //   .createReadStream(path.join(__dirname, `../.gitignorelocal}`))
    //   .pipe(fs.createWriteStream(`${packageJson.name}/.gitignore`))


    console.log('npm init -- done\n');

    // installing dependencies
    console.log('Installing deps -- it might take a few minutes..');
    const devDeps = getDeps(packageJson.devDependencies);
    const deps = getDeps(packageJson.dependencies);
    exec(
      `cd ${packageJson.name} && npm i -D ${devDeps} && npm i -S ${deps}`,
      (npmErr, npmStdout, npmStderr) => {
        if (npmErr) {
          console.error(`it's always npm, ain't it?
      ${npmErr}`);
          return;
        }
        console.log(npmStdout);
        console.log('Dependencies installed');

        console.log('Copying .gitignore file..');
        // copy additional source files

        // fs
        //   .createReadStream(path.join(__dirname, `../gitignorelocal}`))
        //   .pipe(fs.createWriteStream(`${packageJson.name}/.gitignore`))

        console.log('Copying additional files..');
        // copy additional source files
        fs
          .copy(path.join(__dirname, '../src'), `${packageJson.name}/src`)
          .then(() =>
            console.log(`All done!\nYour project is now started into ${
              packageJson.name
            } folder, refer to the README for the project structure.\nHappy Coding!`))
          .catch(err => console.error(err));
      },
    );
  },
);