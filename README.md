# Omar

A web scraping tool for ecommerce solutions. I wouldn't use this if I were you.

### Requirements
* CasperJS
* Node and npm 

### Usage
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


