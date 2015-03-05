This project provides a simple, automated environment for experimenting with test-driven JavaScript development. It’s perfect when you need a no fuss setup to do things like code kata!

## Installation & Setup

1. Make sure you’ve installed [Node](http://nodejs.org/).
2. Install the Grunt command line tool globally by running `> sudo npm install grunt-cli`
3. Clone this repository or [download the ZIP](https://github.com/Krxtopher/javascript-code-kata-starter/archive/master.zip).
4. From a command prompt, navigate to the root of the repository.
5. Run `> sudo npm install` to automatically install the project's dependencies.

## How To Use

Add your own JavaScript files to the `src/` directory. Add your own test specs to the `test/specs/` directory. See **src/myApp.js** and **test/specs/myApp.spec.js** for guidance on how to structure your source code and unit test code.

To run your tests, type `> grunt test:live`

This will automatically detect your files in the `src/` and `test/specs/` directories and launch a live test runner in your default browser. Just leave the browser open while you work. It will automatically refresh and re-run your tests anytime you edit either your source files or your spec files!

If you’d rather do a one-time test run, use `> grunt test` instead.

## Reference

This project uses [Mocha](http://mochajs.org/) as the testing framework and includes the [Chai](http://chaijs.com/) assertion & matcher library.
