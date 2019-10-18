//call in FileSystem to write and read files
var Spotify = require('node-spotify-api');
require("dotenv").config();
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var fs = require("fs");


var SpotifySearch = function () {

    this.findSpotify = function (track) {
        var concertData = "";
        spotify.search({ type: 'track', query: track }, function (err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }
            jsonData = data.tracks.items;
            console.log(jsonData[0].artists[0].name)
            for (var i = 0; i < 5; i++) {
                concertData += [
                    "Artist: " + jsonData[i].artists.map(e => e.name).join(", "),
                    "Song Name: " + jsonData[i].name,
                    "Preview Link: " + jsonData[i].preview_url,
                    "Album: " + jsonData[i].album.name
                ].join("\n");
                concertData += "\n------------------------------------------------------------------\n";
            }


            fs.appendFile("./log.txt", concertData, function (err) {
                if (err) throw err;
                console.log(concertData);
            });
        });      
    };
};

module.exports = SpotifySearch;
