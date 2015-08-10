var runtime = require("phpruntime"),
    env = runtime._environment;

env.expose(function jsImport(name){
    return global[name];
},"import");
