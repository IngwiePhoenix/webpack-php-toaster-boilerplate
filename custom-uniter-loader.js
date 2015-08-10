var utils = require("loader-utils");
module.exports = function(source) {
    this.cacheable();
    var src = [],
        uniter = require("phpruntime"),
        phptoast = uniter.phpToAST.create(),
        phptojs = uniter.phpToJS,
        params = utils.parseQuery(this.query),
        wrapper = JSON.stringify(require.resolve("./runtime_wrapper.js"));

    var js = phptojs.transpile(phptoast.parse(source));
    var codeFunc = "(function(){ return "+js+" })()";

    var optstr = "{}";
    if(typeof params.options == "object") {
        optstr = JSON.stringify(params.options);
    }
    var boot = "undefined";
    if(typeof params.bootstrapper == "string") {
        boot = "function(){require("+JSON.stringify(params.bootstrapper)+");}";
    }

    src.push("var wrap = require("+wrapper+");");
    src.push("module.exports = wrap("+["("+codeFunc+")", optstr, boot].join(",")+");");

    return src.join("\n");
}
