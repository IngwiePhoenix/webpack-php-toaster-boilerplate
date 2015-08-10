module.exports = function(rtc, opts, boot) {
    var r = require("phpruntime");
    if(typeof r._options == "undefined") r._options = opts;
    if(typeof r._environment == "undefined") { r._environment=r.createEnvironment(); }
    if(typeof boot == "function") {
        // Bootstrapper must use r._environment and/or r._options.
        boot();
    }
    var ex = rtc(r._options, r._environment);
    var rt = ex.execute();
    return rt.value().getNative();
}
