# Omar

A web scraping tool for ecommerce solutions. I wouldn't use this if I were you.

![alt text][omar]
[omar]: http://i866.photobucket.com/albums/ab226/muscleart/PopArtPro/Omar.jpg "...Indeed"

### Requirements
* [PhantomJS](http://phantomjs.org/)
* [CasperJS](http://casperjs.org/)
* [Node and npm](https://nodejs.org/)

### Usage
```
$ git clone git@github.com:psealock/omar.git
$ cd omar && npm install
```
create a strategy similar to _/strategies/wdmusic.js_

```
module.exports = {
	url: 'http://www.wdmusic.com/classical_guitar_tuners.html',
	links: '.mainContent table table tbody td a:first-child',
	csv: [
		{header: 'Name', query: '.productName'},
		{header: 'SKU', query: '.sku', regex: 'SKU: '},
		{header: 'Brand', query: '.brand'},
		{header: 'Description', query: '.mainContent table table tr:nth-child(2) td'},
		{header: 'price', query: '.miNowOnly', regex: 'Price: \\$'},
		{header: 'Image', query: '#bigImage img', attr: 'src'}
	]
}
```
Indeed

```
$ npm run omar
```


