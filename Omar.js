var fs = require('fs');

var Omar = (function () {
	/*
	Private functions
	*/




	/*
	Public functions
	*/
	return {
		/*
		Helper function
		*/
		writeFile: function (filename, content) {
		    fs.write(filename, content, 'a');
		},

		/*
		Gather elements or a specific attribute
		*/
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

		/*
		Start the csv on the right foot
		*/
		createCsvLine: function (filename, csvArray) {
		    this.writeFile(filename, csvArray.reduce(function (a, b, index) {
		        if(index === 0) {
		            return a + b;
		        }
		        return a + ', ' + b;
		    }, ''));
		    this.writeFile(filename, '\n');
		}
	}

})();

module.exports = Omar;