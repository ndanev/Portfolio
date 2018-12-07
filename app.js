const express = require('express');


const app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('portfolio');
});


app.listen(5000, () => {
    console.log('Portfolio server started..');
});