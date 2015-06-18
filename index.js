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
  Omar.createCsvLine(output, strategy.csv.map(function(csv) {
    return csv.header;
  }));
  Omar.createCsvLine(output, []);
});

casper.then(function () {
  links = this.evaluate(Omar.getElements, strategy.links, 'href');
  links.forEach(function (link) {
    casper.then(function () {
      this.thenOpen(link, function () {
        this.echo(this.getTitle());
        var csvArray = [];
        strategy.csv.forEach(function (csvItem) {
          casper.then(function () {
            csvArray.push(this.evaluate(Omar.evaluateProduct, csvItem));
          });
        });
        casper.then(function () {
          Omar.createCsvLine(output, csvArray);
        });
      });
    });
  }.bind(this));
});

casper.run(function() {
  this.log('all done', 'info');
  this.exit();
});


