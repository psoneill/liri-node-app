# liri-node-app

Link: https://psoneill.github.io/liri-node-app/

This app is designed to show proficiency in the basic functionality of Node JS.  The user will be able to provide the program one or more arguments which will be processed and will provide the user output data on movies, music, and concerts.

Supported commands:
- "movie-this": this command will utilize the axios npm to access the OMDB API and return information on movies and shows
- "concert-this": this command will utilize the axios npm to access the BandsInTown API and return information on musical acts with upcoming concerts
- "spotify-this-song": this command will utilize the Spotify npm to return information on a provided music track 
- "do-what-it-says": this command will access a .txt file and read a command from that files using the File System node tool

Technologies Used:
- Node JS
- FileSystem (Node)
- Axios NPM
- DotEnv NPM
- Spotify NPM
- Moment NPM

![Liri Movie Demo](./demos/LiriMovieDemo.mov);
![Liri Concert Demo](./demos/LiriConcertDemo.mov);
![Liri Spotify Demo](./demos/LiriSpotifyDemo.mov);
![Liri Read File Demo](./demos/LiriReadFileDemo.mov);