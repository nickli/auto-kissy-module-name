/*
 * grunt-auto-kissy-module-name
 * https://github.com/litao/auto-kissy-module-name
 *
 * Copyright (c) 2014 litao.lt
 * Licensed under the MIT license.
 * Author litao.lt@alibaba-inc.com
 */

'use strict';

module.exports = function(grunt) {

    var fs     = require('fs');
    var helper = require("./helper");
    var esprima   = require("esprima");
    var escodegen = require("escodegen");

    function completeFullModuleFormat( ast , name ) {
        for( var j = ast.body.length - 1; j >= 0; j-- ){
             var body  = ast.body[j];
             var expression = body.expression;
             if( isKissy( expression ) ) {
                 var addArguments = expression.arguments;
                 if( addArguments[0].type == "Literal" ){
                     //第一个为Literal的话，说明是已经有写moduleName
                     if( addArguments[0].value == name ){
                         //如果moduleName和计算的不吻合，已计算的为主

                         addArguments.shift();

                         addArguments.unshift({
                             type  : 'Literal',
                             value : name
                         });

                     }

                 } else {
                     addArguments.unshift({
                         type  : 'Literal',
                         value : name
                     });
                 }
             }
        }
    }

    function isKissy(t) {
        return t.type == 'CallExpression'
            && t.callee.type == 'MemberExpression' 
            && t.callee.object.type == 'Identifier' 
            && t.callee.object.name == 'KISSY' 
            && t.callee.property.type == 'Identifier' 
            && t.callee.property.name == 'add' 
            && t.arguments.length >= 1 
    
        return t.callee.object && 
               t.callee.object.type == 'Identifier' && 
               t.callee.type == 'MemberExpression' && 
               t.callee.object.name == 'KISSY' && 
               t.callee.property.type == 'Identifier' && 
               t.callee.property.name == 'add' && 
               t.arguments.length >= 2 && 
               t.arguments[1].type == 'FunctionExpression';
    };



    grunt.registerMultiTask('auto_kissy_module_name', 'auto complete the kissy module name', function() {

    var targetDir   = this.data.targetDir;
    
    var tarFiles    = helper.getAllFiles( targetDir );
    var viewJsFiles = helper.getTypedFiles( tarFiles , ".js");

    for (var i = 0; i < viewJsFiles.length; i++) {
        //如果该js文件存在
        if( fs.existsSync(viewJsFiles[i]) ){
            //计算出来moduleName
            var jsFilePath = viewJsFiles[i];

            var moduleName = jsFilePath.replace( targetDir , "" ).replace(/\/?(.+?)(\.js)?$/, "$1");

            var jsFileContent = fs.readFileSync( jsFilePath , "utf8");

            //先序列化为ast对象( abstract syntax tree )
            var ast = esprima.parse(jsFileContent, {
                attachComment: true
            });


            completeFullModuleFormat( ast , moduleName );

            //操作完后反序列化为字符串
            var newJsFileContent = escodegen.generate( ast , {
                comment : true
            });

            fs.writeFileSync( jsFilePath , newJsFileContent , "utf8" );

            //console.log( newJsFileContent );

        }
    }

  });

};
