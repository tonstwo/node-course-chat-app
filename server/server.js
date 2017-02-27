const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, '../public');

var app = express();
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// app.get('/', (req, res) => {
//     res.render('index.html');
// })

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})

module.exports = { app };