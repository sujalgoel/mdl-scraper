const { mdl } = require('../index');

mdl.SearchQuery('aloners')
	.then((data) => {
		console.log('SearchQuery Example:');
		console.log(data);
	});

mdl.FetchQuery('696359-people-living-alone')
	.then((data) => {
		console.log('FetchQuery Example:');
		console.log(data);
	});

mdl.FetchPerson('5647-bong-joon-ho')
	.then((data) => {
		console.log('FetchPerson Example:');
		console.log(data);
	});