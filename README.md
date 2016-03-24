# cordova-update-config

[![npm version](https://badge.fury.io/js/cordova-update-config.svg)](https://badge.fury.io/js/cordova-update-config)

  A node command line tool to update cordova's config.xml, useful in continuous integration build environments.

### Install

```
  npm i -g cordova-update-config
```

### Synopsis

```
  cordova-update-config --appname org.company.app --appversion 5.3.223 ...
  cordova-update-config --help
```

### Options

| Alias | Argument            | Description                                  |
| ---   | ---                 | ---                                          |
| -h    | --help              | Display this usage guide.                    |
| -v    | --version           | Display the version of this command          |
| -n    | --appname string    | The application name to update config.xml    |
| -a    | --appversion string | The application version to update config.xml |
| -i    | --appid string      | The application id to update config.xml      |
