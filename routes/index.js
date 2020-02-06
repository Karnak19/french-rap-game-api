const rappers = require("./rappers.route");
const albums = require("./albums.route");
const songs = require("./songs.route");

module.exports = [...rappers, ...albums, ...songs];
