const core = require('@actions/core');
const github = require('@actions/github');
const fs = require('fs');
const ejs = require('ejs');

const inputFilename = core.getInput('input');
const outputFilename = core.getInput('output');
const parameters = JSON.parse(core.getInput('parameters'));

ejs.renderFile(inputFilename, parameters, {}, (err, result) => {
	try {
		if (err) {
			throw err;
		}
		fs.writeFileSync(outputFilename, result);
		console.log(result);
	} catch (e) {
		core.setFailed(e.message);
	}
});
