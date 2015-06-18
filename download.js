var fs = require('fs'),
	strategy = require('./strategies/musicplanet'),
    request = require('request');

var download = function(uri, filename, callback){
  request.head(uri, function(err, res, body){
    console.log('content-type:', res.headers['content-type']);
    console.log('content-length:', res.headers['content-length']);

    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};

var u = 'http://www.musicplanet.co.nz/media/catalog/product/cache/1/small_image/196x268/9df78eab33525d08d6e5fb8d27136e95/4/3/43b96044ecc45d41487936a096a05959be256f07_19.jpg';
var name = 'test-image.jpg';

download(u, name, function(){
  console.log('done');
});