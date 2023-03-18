const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/audio.html', (req, res) => {
    res.sendFile(__dirname + '/views/audio.html');
});

app.get('/video.html', (req, res) => {
    res.sendFile(__dirname + '/views/video.html');
});

app.listen(port, () => {
    console.log(`app is running on ${port}`);
});