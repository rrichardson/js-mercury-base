
Baseline javascript asset pipeline for building tiny and fast virtual-dom js apps.

Runtime libs include:

* mercury and mercury-router for
  * virtual dom
  * efficient single page routing
  * DOM node creation DSL
* xhr for http/s requests
* babel for cs6 bits
* skeleton for lightweight, responsive css


Compile time utilities include:

* Grunt for build-dep mgmt
* npm (obviously)
* babel for cs6 to cs5 compilation
* browserify for concatting require()'d modules
* uglify for minimizing js code
* mincss to mash up the css

The entire minified result comes in at just under 68kB, or about 20kB gzip'd. Not too shabby.

To use: run
```bash
npm install
grunt
http-server
```
