#! /usr/bin/env node

const commandLineArgs = require("command-line-args");
const commandLineUsage = require("command-line-usage");
const ConfigParser = require("cordova-common").ConfigParser;
const CordovaError = require("cordova-common").CordovaError;
const path = require("path");

const optionDefinitions = [
  {
    name: "help",
    description: "Display this usage guide.",
    alias: "h",
    type: Boolean,
  },
  {
    name: "version",
    description: "Display the version of this command",
    alias: "v",
    type: Boolean,
  },
  {
    name: "appname",
    description: "The application name to update config.xml",
    alias: "n",
    type: String,
  },
  {
    name: "appversion",
    description: "The application version to update config.xml",
    alias: "a",
    type: String,
  },
  {
    name: "appid",
    description: "The application id to update config.xml",
    alias: "i",
    type: String,
  },
  {
    name: "root",
    description: "The root directory that contains the config.xml",
    alias: "r",
    type: String,
  },
  {
    name: "file",
    description:
      "The path of the cordova config.xml. Cannot be used in combination with --root (-r)",
    alias: "f",
    type: String,
  },
];

function main(callArguments) {
  const continueExecution = handleMetaOptions(callArguments);
  if (!continueExecution) return;

  const configPath = getConfigPath(
    callArguments.file,
    callArguments.projectRoot
  );
  const config = new ConfigParser(configPath);

  if (callArguments.appid) {
    config.setPackageName(callArguments.appid);
  }

  if (callArguments.appname) {
    config.setName(callArguments.appname);
  }

  if (callArguments.appversion) {
    config.setVersion(callArguments.appversion);
  }

  config.write();
}

function handleMetaOptions(callArguments) {
  if (callArguments.help || Object.keys(callArguments).length == 0) {
    console.log(
      commandLineUsage([
        {
          header: "Options",
          optionList: optionDefinitions,
        },
      ])
    );
    return false;
  }

  if (callArguments.version) {
    const pkg = require("../package.json");
    console.log("cordova-update-config " + pkg.version);
    return false;
  }

  return true;
}

function getConfigPath(fileOption, projectRootOption) {
  if (fileOption) {
    return fileOption;
  }
  const projectRoot =
    projectRootOption || require("../lib/util").cordovaProjectRoot();
  if (!projectRoot) {
    throw new CordovaError(
      "Current working directory is not a Cordova-based project."
    );
  }
  return path.join(projectRoot, "config.xml");
}

const arguments = commandLineArgs(optionDefinitions);
main(arguments);
