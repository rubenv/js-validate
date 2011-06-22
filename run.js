#! /usr/bin/env node

var JSHINT = require(__dirname + '/jshint.js').JSHINT,
    fs = require('fs');

var args = process.argv.splice(3);
var options = require(__dirname + '/validate-' + process.argv[2] + '.conf.js');

var pre = "\u001b[1m";
var post = "\u001b[0m";

for (var i = 0; i < args.length; i++) {
    var source = fs.readFileSync(args[i], 'UTF-8');
    var result = JSHINT(source, options);
    if (!result) {
        for (var index in JSHINT.errors) {
            var error = JSHINT.errors[index];
            console.log(pre + args[i] + " +" + error.line + " / " + error.character + ":" + post + " " + error.reason);
            console.log(error.evidence);
            var out = "";
            for (var j = 0; j < error.character - 1; j++) {
                out += " ";
            }
            console.log(out + "^");
        }
    }
}
