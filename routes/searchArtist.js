const express = require('express')
const router = express.Router()
const fetch = require('node-fetch')
const { parse } = require('json2csv')
const fs = require('fs');

router.get('/:artist', async (req, res) => {
    const artist = req.params.artist;
    const url = `https://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${artist}&api_key=${process.env.API_KEY}&format=json`;
    const getArtist = await fetch(url, {
        method: 'get',
    })
    const resArtist = await getArtist.json()
    const artistInfo = await resArtist.results.artistmatches.artist.map((ele) => {
        return {
            name: ele.name, mbid: ele.mbid, url: ele.url, image_small: ele.image[0][`#text`],
            image: ele.image
        }
    })

    if (artistInfo.length !== 0) {
        const artistInfoCSV = parse(artistInfo)
        saveResultToCSV(artist, artistInfoCSV)
    }
    else if (artistInfo.length === 0) {
        console.log('Sorry, no matches...')
    }
});

function saveResultToCSV(artist, artistInfoCSV) {
    fs.writeFile(`${artist}.csv`, `ufeff${artistInfoCSV}`,
        {
            encoding: 'utf8',
            mode: 0o666
        },
        (err) => {
            if (err)
                console.log(err);
            else {
                console.log(`Your file ${artist}.csv has been written successfully under "backend-challenge"!`);
            }
        });
}

module.exports = router

