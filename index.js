var Omar = require('./Omar'),
    strategy = require('./strategies/wdmusic'),
    casper = require('casper').create({
        verbose: false,
        logLevel: 'debug'
    });

var output = 'dist/output.csv';

var links = [];

casper.start(strategy.url, function() {
    this.echo(this.getTitle());
    Omar.createCsvHeaders(output, strategy.csv);
});

casper.then(function () {
    links = this.evaluate(Omar.getElements, strategy.links, 'href');
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


