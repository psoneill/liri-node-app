//call in Axios NPM for accessing APIs
var axios = require("axios");
var moment = require("moment");
//call in FileSystem to write and read files
var fs = require("fs");

var Band = function () {
    this.findBand = function (artist) {
        var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"

        axios.get(queryUrl).then(function (response) {
            var jsonData = response.data;
            var concertData="";
            for (var i = 0; i < jsonData.length; i++) {
                concertData += [
                    "Venue: " + jsonData[i].venue.name,
                    "Location: " + jsonData[i].venue.city + ", " + jsonData[i].venue.region,
                    "Date: " + moment(jsonData[i].datetime).format("MM/DD/YY")
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

module.exports = Band;
