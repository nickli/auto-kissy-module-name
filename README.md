# grunt-auto-kissy-module-name

> 在编写一个kissy模块的时候，每次都要KISSY.add("这里是模块名称") 在 add里把模块所在的路径敲一遍，很无聊有么有，但是呢生产环境却又确实有必要有这个moduleName，combine需要，性能优化的需要，关乎性能的问题在前端都是大问题！所以......

> grunt-auto-kissy-module-name 为此而來。你可以在开发的时候不用写modulename

  ```js
  KISSY.add(function(){
  
  });
  ```

> 在打包的时候运行 grunt-auto-kissy-module-name 来在你指定的目录下面自动给所有文件添加上moduleName

  ```js
  KISSY.add("index" , function(){
  
  });
  ```
 

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-auto-kissy-module-name --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-auto-kissy-module-name');
```

## The "auto_kissy_module_name" task

### Overview
In your project's Gruntfile, add a section named `auto_kissy_module_name` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  auto_kissy_module_name: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.separator
Type: `String`
Default value: `',  '`

A string value that is used to do something with whatever.

#### options.punctuation
Type: `String`
Default value: `'.'`

A string value that is used to do something else with whatever else.

### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

```js
grunt.initConfig({
  auto_kissy_module_name: {
    options: {},
    files: {
      'dest/default_options': ['src/testing', 'src/123'],
    },
  },
});
```

#### Custom Options
In this example, custom options are used to do something else with whatever else. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result in this case would be `Testing: 1 2 3 !!!`

```js
grunt.initConfig({
  auto_kissy_module_name: {
    options: {
      separator: ': ',
      punctuation: ' !!!',
    },
    files: {
      'dest/default_options': ['src/testing', 'src/123'],
    },
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
