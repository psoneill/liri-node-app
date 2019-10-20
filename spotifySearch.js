var Spotify = require('node-spotify-api');
require("dotenv").config();
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
//call in FileSystem to write and read files
var fs = require("fs");

//constructor SpotifySearch
var SpotifySearch = function () {
    //method findSpotify which uses Spotify npm to 
    this.findSpotify = function (track) {
        //declare variable concertData to hold data
        var concertData = "";
        //use spotify search npm to search spotify
        spotify.search({ type: 'track', query: track }, function (err, data) {
            //console log err if error occurs
            if (err) {
                return console.log('Error occurred: ' + err);
            }
            //set var jsonData to the data items
            var jsonData = data.tracks.items;
            //loop through first 5 results 
            for (var i = 0; i < 5; i++) {
                //add results to concert data
                concertData += [
                    "Artist: " + jsonData[i].artists.map(e => e.name).join(", "),
                    "Song Name: " + jsonData[i].name,
                    "Preview Link: " + jsonData[i].preview_url,
                    "Album: " + jsonData[i].album.name
                ].join("\n");
                //add divider between results
                concertData += "\n------------------------------------------------------------------\n";
            }
            //apend results to log.txt
            fs.appendFile("./log.txt", concertData, function (err) {
                if (err) throw err;
                console.log(concertData);
            });
        });      
    };
};
//export SpotifySearch object
module.exports = SpotifySearch;
