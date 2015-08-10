module.exports = function(rtc, opts, boot) {
    var r = require("phpruntime");
    if(typeof r._options == "undefined") r._options = opts;
    if(typeof r._environment == "undefined") {
        var env = r._environment = r.createEnvironment();
        env.getStdout().on("data",console.log);
        env.getStderr().on("data",function(s){
            console.log("ERROR: "+s);
        });
    }
    if(typeof boot == "function") {
        // Bootstrapper must use r._environment and/or r._options.
        boot();
    }
    var ex = rtc(r._options, r._environment);
    var rt = ex.execute();
    return rt.value().getNative();
}
