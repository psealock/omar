module.exports = {
	links: '.mainContent table table tbody td a:first-child',
	csv: [
		{header: 'Name', query: '.productName'},
		{header: 'SKU', query: '.sku', regex: 'SKU: '},
		{header: 'Brand', query: '.brand'},
		{header: 'Description', query: '.mainContent table td:nth-child(2) table tr:nth-child(2) td'},
		{header: 'Additional Info', query: '.mainContent table td:nth-child(2) table tr:nth-child(6) td'},
		{header: 'price', query: '.miNowOnly', regex: 'Price: \\$'},
		{header: 'Image', query: '#bigImage img', attr: 'src'}
	]
}