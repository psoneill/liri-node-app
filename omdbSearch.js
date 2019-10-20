//call in Axios NPM for accessing APIs
var axios = require("axios");
//call in FileSystem to write and read files
var fs = require("fs");

var OMDB = function () {
    //method inside OMDB function to find provided movie
    this.findMovie = function (movieName) {
        //divider to split returned info
        var divider = "\n------------------------------------------------------------\n\n";
        //sets queryUrl to be provided to axios call
        var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
        //uses axios to call omdb API
        axios.get(queryUrl).then(function (response) {
            //sets new variable for response data
            var jsonData = response.data;
            //creates new movideData array for correct display and joins them with a line break
            var movieData = [
                //returns object information based on key value pairs in return object
                "Title: " + jsonData.Title,
                "Year: " + jsonData.Year,
                "IMDB Rating: " + jsonData.imdbRating,
                //uses map function to pull back and display all additional ratings
                "Other Ratings: " + jsonData.Ratings.map(e => e.Source + " - " + e.Value).join(", "),
                "Country: " + jsonData.Country,
                "Language: " + jsonData.Language,
                "Plot: " + jsonData.Plot,
                "Actors: " + jsonData.Actors
            ].join("\n");
            //appends returned info the log.txt file using filesystem
            fs.appendFile("./log.txt", movieData + divider, function (err) {
                //if error returned then throw the error to console
                if (err) throw err;
                //additionally console logs movieData
                console.log(movieData);
            });
        });
    };
};
//exports OMDB object
module.exports = OMDB;
