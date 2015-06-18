var fs = require('fs'),
    strategy = require('./strategies/musicplanet'),
    casper = require('casper').create({
        verbose: true,
        logLevel: 'debug'
    });

var link = 'ul.products-grid li h2 a';
var imageQuery = 'ul.products-grid li a img';

var links = [];

function writeFile (content) {
    fs.write('output.csv', content, 'a');
}

function getElements(query, attribute) {
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
}

casper.start(strategy.url, function() {
    this.echo(this.getTitle());
});

casper.then(function () {
    links = this.evaluate(getElements, strategy.links, 'href');
    this.echo(links[0]);
});

casper.then(function() {
    this.thenOpen(links[0], function () {
        this.echo(this.getTitle());
    });
});


// casper.then(function() {
// 	this.log('getting links...', 'info');

//     var images = this.evaluate(getElements, imageQuery, 'src');
//     images.forEach(function (l) {
//         writeFile(l);
//         writeFile('\n');
//     });

// });

casper.run(function() {
    this.log('all done', 'info');
    this.exit();
});


