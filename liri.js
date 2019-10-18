var Omdb = require("./omdbSearch.js");
var Band = require("./bandSearch.js")
var Spotify = require("./spotifySearch.js")

var userCommand = process.argv[2];
var userValue = process.argv.slice(3).join("+");

switch (userCommand) {
    case "movie-this":
        if (!userValue) {
            userValue = "Mr. Nobody";
        }
        var newOMDB = new Omdb();
        newOMDB.findMovie(userValue);
        break;
    case "concert-this":
        if (!userValue) {
            userValue = "Justin Timberlake";
        }
        var newConcert = new Band();
        newConcert.findBand(userValue);
        break;
    case "spotify-this-song":
        if (!userValue) {
            userValue = "The Sign";
        }
        var newSpotify = new Spotify();
        newSpotify.findSpotify(userValue);
        break;
    default:
        console.log("Sorry I don't know that command");
}