var fs = require('fs'),
    strategy = require('./strategies/wdmusic'),
    casper = require('casper').create({
        verbose: false,
        logLevel: 'debug'
    });

var output = 'dist/output.csv';

function writeFile (filename, content) {
    fs.write(filename, content, 'a');
}

function getElements (query, attribute) {
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

function getInnerHtml (query) {

}

var links = [];

casper.start(strategy.url, function() {
    this.echo(this.getTitle());
    writeFile(output, strategy.csv.reduce(function (a, b, index) {
        if(index === 0) {
            return a + b.header;
        }
        return a + ', ' + b.header;
    }, ''));
    writeFile(output, '\n');
});

// casper.then(function () {
//     links = this.evaluate(getElements, strategy.links, 'href');
//     links.forEach(function (link) {
//         casper.then(function () {
//             this.thenOpen(link, function () {
//                 this.echo(this.getTitle());
//             });
//         });
//     }.bind(this));
// });



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


