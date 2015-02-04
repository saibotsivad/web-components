var fs = require('fs')
var path = require('path')
var Mustache = require('mustache')
var tape = require('tape')

tape('the output and expected output should be identical', function(t) {
	var data = require('./input.json')
	var template = fs.readFileSync(path.join(__dirname, '..', 'template.html'), 'utf8')
	var expectedOutput = fs.readFileSync('./output.html', 'utf8')
	var actualOutput = Mustache.render(template, data)

	t.equal(expectedOutput, actualOutput, 'exact same characters')
	t.end()
})
