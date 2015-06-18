module.exports = {
	url: 'http://www.wdmusic.com/classical_guitar_tuners.html',
	links: '.mainContent table table tbody td a:first-child',
	csv: [
		{header: 'Name', query: ''},
		{header: 'SKU', query: ''},
		{header: 'Brand', query: ''},
		{header: 'Description', query: ''},
		{header: 'price', query: ''},
		{header: 'Image', query: ''}
	]
}