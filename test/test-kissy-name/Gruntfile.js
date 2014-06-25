var targetDir  = "./build";
module.exports = function(grunt){
    //在这里配置你的grunt任务
    grunt.initConfig({
        auto_kissy_module_name : {
            build : {
                targetDir : targetDir
            }
        }
    });

    grunt.loadNpmTasks("grunt-auto-kissy-module-name");

    grunt.registerTask("autoname" , ["auto_kissy_module_name"])
}
