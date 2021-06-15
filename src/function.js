const axios = require('axios');
const cheerio = require('cheerio');
const IMAGE_SRC = ['src', 'data-cfsrc', 'data-src'];

module.exports = {
	fetchhtml: async function(url) {
		const options = {
			header: {
				'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36',
				'referer': 'https://www.google.com/',
			},
		};
		const html = await axios.get(url, options);
		return cheerio.load(html.data);
	},
	fetchPoster: function(container) {
		const image = container.find('img[class="img-responsive"]');
		for (let i = 0; i < IMAGE_SRC.length; i++) {
			if (image.attr(IMAGE_SRC[i])) {
				return image.attr(IMAGE_SRC[i]);
			}
		}
	},
	SearchDramabyIDResult: function(title, rating, poster, synopsis, cast, trailer, details, others) {
		return {
			title: typeof title !== 'undefined' ? title : null,
			rating: typeof rating !== 'undefined' ? rating : null,
			poster: typeof poster !== 'undefined' ? poster : null,
			synopsis: typeof synopsis !== 'undefined' ? synopsis : null,
			cast: typeof cast !== 'undefined' ? cast : null,
			trailer: typeof trailer !== 'undefined' ? trailer : null,
			details: {
				country: typeof details.country !== 'undefined' ? details.country : null,
				type: typeof details.type !== 'undefined' ? details.type : null,
				episodes: typeof details.episodes !== 'undefined' ? details.episodes : null,
				aired: typeof details.aired !== 'undefined' ? details.aired : null,
				aired_on: typeof details.aired_on !== 'undefined' ? details.aired_on : null,
				original_network: typeof details.original_network !== 'undefined' ? details.original_network : null,
				duration: typeof details.duration !== 'undefined' ? details.duration : null,
				score: typeof details.score !== 'undefined' ? details.score : null,
				ranked: typeof details.ranked !== 'undefined' ? details.ranked : null,
				popularity: typeof details.popularity !== 'undefined' ? details.popularity : null,
				content_rating: typeof details.content_rating !== 'undefined' ? details.content_rating : null,
				watchers: typeof details.watchers !== 'undefined' ? details.watchers : null,
				favorites: typeof details.favorites !== 'undefined' ? details.favorites : null,
			},
			others: {
				native_title: typeof others.native_title !== 'undefined' ? others.native_title : null,
				also_known_as: typeof others.also_known_as !== 'undefined' ? others.also_known_as : null,
				screenwriter: typeof others.screenwriter !== 'undefined' ? others.screenwriter : null,
				director: typeof others.director !== 'undefined' ? others.director : null,
				genres: typeof others.genres !== 'undefined' ? others.genres : null,
				tags: typeof others.tags !== 'undefined' ? others.tags : null,
			},
		};
	},
};