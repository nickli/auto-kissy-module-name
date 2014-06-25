var targetDir  = "./build";
module.exports = function(grunt){
    //在这里配置你的grunt任务
    grunt.initConfig({
        autoname : {
            build : {
                targetDir : targetDir
            }
        }
    });

    grunt.loadNpmTasks("grunt-auto-kissy-module-name");

    grunt.registerTask("build" , ["autoname"])
}
