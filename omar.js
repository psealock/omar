var fs = require('fs'),
    strategy = require('./strategies/wdmusic'),
    casper = require('casper').create({
        verbose: false,
        logLevel: 'debug'
    });

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

var links = [];

casper.start(strategy.url, function() {
    this.echo(this.getTitle());
});

casper.then(function () {
    links = this.evaluate(getElements, strategy.links, 'href');
    links.forEach(function (link) {
        casper.then(function () {
            this.thenOpen(link, function () {
                this.echo(this.getTitle());
            });
        });
    }.bind(this));
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


