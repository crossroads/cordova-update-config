#! /usr/bin/env node

var commandLineArgs = require('command-line-args');

const optionDefinitions = [
  {
    name: 'help', description: 'Display this usage guide.',
    alias: 'h', type: Boolean
  },
  {
    name: 'version', description: 'Display the version of this command',
    alias: 'v', type: Boolean
  },
  {
    name: 'appname', description: 'The application name to update config.xml',
    alias: 'n', type: String
  },
  {
    name: 'appversion', description: 'The application version to update config.xml',
    alias: 'a', type: String
  },
  {
    name: 'appid', description: 'The application id to update config.xml',
    alias: 'i', type: String
  }
];

const options = {
  title: 'cordova-update-config',
  description: "A command line tool to update cordova's config.xml, useful in continuous integration build environments.",
  synopsis: [
    '$ cordova-update-config --appname org.company.app --appversion 5.3.223 ...',
    '$ cordova-update-config --help'
  ],
  footer: [
    ''
  ]
};

var cli = commandLineArgs(optionDefinitions);
var args = cli.parse();

if (args.help || Object.keys(args).length == 0) {
	console.log(cli.getUsage(options));
	return;
}

var ConfigParser    = require('cordova-common').ConfigParser;
var CordovaError    = require('cordova-common').CordovaError;
var fs              = require('fs');
var path            = require('path');

if (args.version)
{
  var pkg = require('../package.json');
  console.log('cordova-update-config ' + pkg.version);
  return;
}

var projectRoot = cordova.findProjectRoot();
if (!projectRoot) {
  throw new CordovaError('Current working directory is not a Cordova-based project.');
}

var configPath = path.join(projectRoot, 'config.xml');
var config = new ConfigParser(configPath);

if (args.appid) {
  config.setPackageName(args.appid);
}

if (args.appname) {
  config.setName(args.appname);
}

if (args.appversion) {
  config.setVersion(args.appversion);
}

config.write();
