var fs = require('fs');

var Omar = (function () {
	/*
	Private functions
	*/




	/*
	Public functions
	*/
	return {
		writeFile: function (filename, content) {
		    fs.write(filename, content, 'a');
		},
		getElements: function (query, attribute) {
		    var elements = document.querySelectorAll(query),
		        res = [];

		    if(attribute) {
		        for (var i = 0; i < elements.length; i++) {
		            res[i] = elements[i].getAttribute(attribute);
		        }
		    }else {
		        res = elements;
		    }

		    return res
		},
		createCsvHeaders: function (filename, csvArray) {
		    this.writeFile(filename, csvArray.reduce(function (a, b, index) {
		        if(index === 0) {
		            return a + b.header;
		        }
		        return a + ', ' + b.header;
		    }, ''));
		    this.writeFile(filename, '\n');
		},
		getInnerHtml: function (query) {

		}
	}

})();

module.exports = Omar;