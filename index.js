#!/usr/bin/env node

var chalk = require('chalk');
var shell = require('shelljs');
var readline = require('readline');

var rl = readline.createInterface(process.stdin, process.stdout);

rl.setPrompt(chalk.green('Android') + ' ' + chalk.red('Keyboard') + ' by ' + chalk.blue('KeizerDev') + '\nText> ');
rl.prompt();

rl.on('line', function(line) {
    shell.exec("adb shell \"input keyboard text '" + line + "'\"", {silent:true}).output;
    if (line === "right") rl.close();
        rl.prompt();
}).on('close',function(){
    process.exit(0);
});
