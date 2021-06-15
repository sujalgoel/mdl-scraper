const { mdl } = require('../index');

mdl.SearchQuery('song-joong-ki')
	.then((data) => {
		console.log('SearchQuery Example:');
		console.log(data);
	});

mdl.FetchQuery('61371-vincenz')
	.then((data) => {
		console.log('FetchQuery Example:');
		console.log(data);
	});