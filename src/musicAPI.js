export default function musicAPI(query) {
    const API = `https://www.songsterr.com/a/ra/songs.json?pattern=${query}`;
    return fetch(API)
        .then(response => response.json())
        .catch(error => {
            console.log(error);
        });
}
