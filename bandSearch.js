//call in Axios NPM for accessing APIs
var axios = require("axios");
var moment = require("moment");
//call in FileSystem to write and read files
var fs = require("fs");
//new constructor for Band
var Band = function () {
    //method findBand to find user supplied band on bandsintown
    this.findBand = function (artist) {
        //builds queryURL for BandsInTown API
        var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"
        //uses axios to get API request
        axios.get(queryUrl).then(function (response) {
            //sets variable for response data
            var jsonData = response.data;
            //initializes variable for concertData
            var concertData="";
            //for loop which finds all concerts listed and loops through them
            for (var i = 0; i < jsonData.length; i++) {
                //array for concertData which saves off elements
                concertData += [
                    "Venue: " + jsonData[i].venue.name,
                    "Location: " + jsonData[i].venue.city + ", " + jsonData[i].venue.region,
                    "Date: " + moment(jsonData[i].datetime).format("MM/DD/YY")
                ].join("\n");
                //adds divider text to concertData
                concertData += "\n------------------------------------------------------------------\n";
            }

            //appends concertData to log.txt
            fs.appendFile("./log.txt", concertData, function (err) {
                if (err) throw err;
                console.log(concertData);
            });
        });
    };
};
//exports Band object
module.exports = Band;
