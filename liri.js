//initialize all 3 supporting js files and the FileSystem through require()
var Omdb = require("./omdbSearch.js");
var Band = require("./bandSearch.js")
var Spotify = require("./spotifySearch.js")
var fs = require("fs");

//function for running the user's query
function runQuery(userCommand, userValue) {
    //switch statement to handle the input
    switch (userCommand) {
        //if userCommand = movie-this
        case "movie-this":
            //sets default value if no userValue provided
            if (!userValue) {
                userValue = "Mr. Nobody";
            }
            //creates new Omdb constructor
            var newOMDB = new Omdb();
            //runs findMovie from new Omdb
            newOMDB.findMovie(userValue);
            //breaks out of loop
            break;
        //if userCommand = concert-this
        case "concert-this":
            //sets default value if no userValue provided
            if (!userValue) {
                userValue = "Justin Timberlake";
            }
            //creates new Band constructor
            var newConcert = new Band();
            //runs findBand method in Band constructor
            newConcert.findBand(userValue);
            break;
        //if userCommand = spotify-this-song
        case "spotify-this-song":
            //sets default value if no userValue provided
            if (!userValue) {
                userValue = "The Sign";
            }
            //creates new Spotify constructor
            var newSpotify = new Spotify();
            //uses findSpotify method for newSpotify
            newSpotify.findSpotify(userValue);
            break;
        //if userCommand = do-what-it-says
        case "do-what-it-says":
            fs.readFile("random.txt", "utf8", function (error, data) {
                //if readFile returns error then console log it
                if (error) {
                    return console.log(error);
                }
                //splits readFile text into its component parts
                var dataArr = data.split(",");
                //recursively calls runQuery function with new inputs
                runQuery(dataArr[0], dataArr[1]);
            });
            break;
        default:
            //lets user know if command is unknown
            console.log("Sorry I don't know that command");
    }
}
//calls runQuery with user provided arguments to start program
runQuery(process.argv[2], process.argv.slice(3).join("+"));
