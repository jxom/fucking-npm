#!/usr/bin/env node
'use strict';
const exec = require('child_process').exec;
const meow = require('meow');

const cli = meow(`
	Usage
	  $ fucking-npm [shell]

	Examples
		$ fucking-npm zsh
		$ fucking-npm bash
`);

const supportedShells = ['zsh', 'bash'];
const shell = cli.input[0];
if (supportedShells.includes(shell)) {
	exec(`echo 'alias fucking="npm"' >> ~/.${shell}rc && source ~/.${shell}rc`);
	console.log('Successfully fucking binded \'npm\' to \'fucking\'\nRestart your fucking shell to use it.');
} else {
	console.log('Enter a fucking shell name!\n\nExample: fucking-npm bash\n\n\'fucking-npm --help\' for help');
}
