//call in Axios NPM for accessing APIs
var axios = require("axios");
//call in FileSystem to write and read files
var fs = require("fs");

var OMDB = function () {
    this.findMovie = function (movieName) {
        var divider = "\n------------------------------------------------------------\n\n";
        var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

        axios.get(queryUrl).then(function (response) {
            var jsonData = response.data;

            var movieData = [
                "Title: " + jsonData.Title,
                "Year: " + jsonData.Year,
                "IMDB Rating: " + jsonData.imdbRating,
                "Other Ratings: " + jsonData.Ratings.map(e => e.Source + " - " + e.Value).join(", "),
                "Country: " + jsonData.Country,
                "Language: " + jsonData.Language,
                "Plot: " + jsonData.Plot,
                "Actors: " + jsonData.Actors
            ].join("\n");

            fs.appendFile("./log.txt", movieData + divider, function (err) {
                if (err) throw err;
                console.log(movieData);
            });
        });
    };
};

module.exports = OMDB;
