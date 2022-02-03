# cordova-update-config-enhanced

[![npm version](https://badge.fury.io/js/cordova-update-config-enhanced.svg)](https://badge.fury.io/js/cordova-update-config-enhanced)

A node command line tool to update cordova's config.xml, useful in continuous integration build environments.

Extends the original [cordova-update-config](https://github.com/crossroads/cordova-update-config) and adds functionality to make this tool more useful.

### Install

```
  npm i -g cordova-update-config-enhanced
```

### Synopsis

```
  cordova-update-config --appname org.company.app --appversion 5.3.223 ...
  cordova-update-config --help
```

### Options

All options are optional, use --help (-h) to get more information.

| Alias | Argument                  | Description                                                                                          |
| ----- | ------------------------- | ---------------------------------------------------------------------------------------------------- |
| -h    | --help                    | Display this usage guide.                                                                            |
| -v    | --version                 | Display the version of this command                                                                  |
| -n    | --appname string          | The application name to update config.xml                                                            |
| -a    | --appversion string       | The application version to update config.xml                                                         |
| -i    | --appid string            | The application id to update config.xml                                                              |
|       | --androidversion [string] | The android version code to set in config.xml. If empty the current version-Code will be incremented |
| -r    | --root                    | Absolute path to folder containing config.xml                                                        |
| -f    | --file                    | Absolute path to config.xml                                                                          |
