const BASE_URL = 'https://mydramalist.com';
const { fetchhtml, fetchPoster, SearchDramabyIDResult } = require('./function');

module.exports = {
	async SearchQuery(query) {
		const $ = await fetchhtml(`${BASE_URL}/search?q=${query}`);
		const dramas = [];
		const people = [];
		$('div[class="col-lg-8 col-md-8"]').find('div[class="box"]').each((_i, e) => {
			if ($(e).find('div[class="box-header"]').text().trim() === 'There were no results matching the query.') {
				throw new Error('Invalid query.');
			}
			const r = {};
			const title = $(e).find('h6[class="text-primary title"]').find('a');
			r.slug = title.attr('href').replace('/', '');
			r.url = `${BASE_URL}${title.attr('href')}`;
			r.thumb = $(e).find('img[class="img-responsive cover lazy"]').attr('data-src');
			if ($(e).attr('id')) {
				r.mdl_id = $(e).attr('id');
				r.title = title.text().trim();
				if ($(e).find('div[class="ranking pull-right"]').find('span').text()) {
					r.ranking = $(e).find('div[class="ranking pull-right"]').find('span').text();
				} else {
					r.ranking = null;
				}
				try {
					r.type = $(e).find('span[class="text-muted"]').text().split('-')[0].trim();
				} catch (_) {
					r.type = null;
				}
				try {
					r.year = $(e).find('span[class="text-muted"]').text().split('-')[1].split(',')[0].trim();
				} catch (_) {
					r.year = null;
				}
				try {
					r.series = $(e).find('span[class="text-muted"]').text().split('-')[1].split(',')[1].trim();
				} catch (_) {
					r.series = null;
				}
				return dramas.push(r);
			}
			r.name = title.text().trim();
			r.nationality = $(e).find('div[class="text-muted"]').text().trim();
			people.push(r);
		});
		const result = {
			dramas,
			people,
		};
		return result;
	},
	async FetchQuery(query) {
		try {
			const $ = await fetchhtml(`${BASE_URL}/${query}`);
			const container = $('div[class="app-body"]');
			const title = container.find('h1[class="film-title"]').find('a').text();
			const rating = parseFloat(container.find('div[class="col-film-rating"]').find('div').text());
			const poster = fetchPoster(container);
			const synopsis = container.find('div[class="show-synopsis"]').find('span').text().replace(/\n/g, '');
			const cast = [];
			container.find('li[class="list-item col-sm-4"]').each((_i, e) => {
				const temp_cast = $(e).find('a[class="text-primary text-ellipsis"]');
				cast.push({
					slug: `${temp_cast.attr('href').trim().replace('/', '')}`,
					name: temp_cast.find('b').text().trim(),
					url: `${BASE_URL}${temp_cast.attr('href').trim()}`,
				});
			});
			const trailer = [];
			const $$ = await fetchhtml(`${BASE_URL}/${query}/trailers`);
			$$('div[class="box-body"]').find('div[class="p-a-sm"]').each(async (_i, e) => {
				trailer.push(`${BASE_URL}${$(e).find('a').attr('href')}`);
			});
			const details = {};
			container.find('div[class="show-detailsxss"]').find('ul[class="list m-a-0 hidden-md-up"]').find('li').each((_i, e) => {
				const _title = $(e).find('b').text().trim();
				details[_title.replace(':', '').replace(/\s/g, '_').toLowerCase()] = $(e).text().replace(_title + ' ', '').trim();
			});
			const others = {};
			container.find('div[class="show-detailsxss"]').find('ul[class="list m-a-0"]').find('li').each((_i, e) => {
				const _title = $(e).find('b').text().trim();
				others[_title.replace(':', '').replace(/\s/g, '_').toLowerCase()] = $(e).text().replace(_title + ' ', '').trim();
			});
			return SearchDramabyIDResult(title, rating, poster, synopsis, cast, trailer, details, others);
		} catch (e) {
			throw new Error(e);
		}
	},
	async FetchPerson(query) {
		try {
			const $ = await fetchhtml(`${BASE_URL}/people/${query}`);
			const profile = {};
			const container = $('div[class="app-body"]');
			profile.name = container.find('h1[class="film-title m-b-0"]').text().trim();
			profile.about = container.find('div[class="col-sm-8 col-lg-12 col-md-12"]').text().trim().replace(/\n/g, '');
			profile.profile = fetchPoster(container);
			const details = {};
			container.find('ul[class="list m-b-0"]').find('li').each((i, e) => {
				const title = $(e).find('b').text().trim();
				details[title.replace(':', '').replace(/\s/g, '_').toLowerCase()] = $(e).text().replace(title + ' ', '').trim();
			});
			const data = Object.assign({}, profile, details);
			return data;
		} catch (e) {
			throw new Error(e);
		}
	},
};