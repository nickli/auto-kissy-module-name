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
    build: {
      // targetDir,要执行的目标目录，一般为打包的build目录
      targetDir : "./build"
    }
  },
});
```

## Release History
_(Nothing yet)_
