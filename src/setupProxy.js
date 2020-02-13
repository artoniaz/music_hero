
const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        proxy("/a/ra/songs.json?pattern=", {
            target: "http://www.songsterr.com",
            changeOrigin: true
        })
    )
}