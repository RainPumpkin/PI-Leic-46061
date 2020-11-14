'use strict'

const urllib = require('urllib')

const LASTFM_HOST = 'http://ws.audioscrobbler.com/2.0/'
const LASTFM_KEY = '79b2506be8ce86d852882e1774f1f2e8'
const LASTFM_TOP_TRACKS = `?method=artist.gettoptracks&format=json&api_key=${LASTFM_KEY}&artist=`
const LASTFM_ARTIST_SEARCH = `?method=artist.search&format=json&api_key=${LASTFM_KEY}&artist=`

/**
 * @param {String} artist Name of the band or artist.
 * @param {function(Error, Array)} cb Callback receiving an array with tracks names or Error if not succeeded
 */
function getTopTracks(artist, cb) {
    const path = LASTFM_HOST + LASTFM_TOP_TRACKS + artist
    urllib.request(path, (err, data, res) => {
        if(err) return cb(err)
        const obj = JSON.parse(data)
        cb(null, obj.toptracks.track.map(t => t.name))
    })
}

/**
 * @param {String} artist Artist name
 * @param {function(Error, Array)} cb Callback receives an array of Artist objects with given name or 
 * an Error if there is no Artist with given name.
 */
function searchArtist(artist, cb) {
	const path = LASTFM_HOST + LASTFM_ARTIST_SEARCH + artist
	console.log(path)
	urllib.request(path, (err, data, res) => {
		if(err) return cb(err)
		const obj = JSON.parse(data)
		//console.log(obj.results.opensearch.totalResults) //opensearch:totalResults not work // totalResults not work
	})
	//obj arriving as undefined, url confirmed good on chrome, 
}


module.exports = {
    'getTopTracks': getTopTracks,
    'searchArtist': searchArtist
}