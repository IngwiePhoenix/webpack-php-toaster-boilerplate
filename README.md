# WebPack + PHP (Uniter)
This little repo showcases how WebPack can be used with [Uniter](https://github.com/asmblah/uniter).

## The files
- `package.json`: Your typical Package config. Note, it does have dependencies.
- `webpack.config.js`: This is a configuration. You'll notice that there is a `_plugins` key. Remove the leading underscore to enable the provided UblifyJS plugin settings. Those are set to a high compression rate as well as optimizations.
- `custom-uniter-loader.js`: This is a tiny, soon to be outsorced, loader, that translates PHP files through Uniter into JS and emits code that will also support a bootstrapper, allowing the user to expose custom functions, classes and objects. It's the script that generates the bridge between the two runtimes, JS and PHP.
- `runtime_wrapper.js`: This script is invoked inside the browser and bundled through the above loader. The only purpose this script has is to execute and return properly. This also stops the code from repeating itself, too.
- `webapp.php`: This is a minimal PHP script that does minimal things. It imports the `console` object and uses it. Play around with it, what you can import and such.
- `php_boot.js`: This is the bootstrapper used in this project. It exposes the `import` closure into the global namespace.

## Usage
```bash
git clone https://github.com/IngwiePhoenix/webpack-php-toaster-boilerplate.git php-webpack
cd phpwebpack
npm install
webpack && node build/webapp.js # Yes, it can run in NodeJS as long as you don't go too advanced.
```

Alternatively, you can also copy the `webapp.js` file and reference from it in a HTML document and open it up in a browser.

## Shoutouts
@asmblah for making Uniter
@sokra for making WebPack
