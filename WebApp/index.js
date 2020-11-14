'use strict'

const lastfm = require('./lib/lastfm')
const users = require('./lib/users')
/*
lastfm.getTopTracks('weekend', (err, tracks) => {
    if(err) console.log(err)
    else tracks.forEach(t => console.log(t))
})
*/


users.getUser('gamboa', (err, user) => console.log(err || user))
users.getUser('jhagdjhd', (err, user) => console.log(err || user))
users.addUser('test', (err, user) => console.log(err || user))
lastfm.searchArtist('muse', (err, artist) => console.log(err || artist))