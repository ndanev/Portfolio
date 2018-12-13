const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');


const app = express();
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.render('portfolio');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.post('/send', (req, res) => {

    var output = `
        YOU HAVE A NEW CONTACT REQUEST!
        --------------------------------------------------------
        Contact Details
        ---------------------
        
        First Name: ${req.body.firstname}
        Last Name: ${req.body.lastname}
        Email: ${req.body.email} 
        Message:
        ${req.body.text}

    `;

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user:'nem.dan.93@gmail.com',
            pass: 'nemanja123'
        }
    });
    
    var mailOption = {
        from: req.body.email,
        to: 'nemanja.danev.93@gmail.com',
        subject: req.body.subject,
        text: output
    };
    
    transporter.sendMail(mailOption, function(error, info) {
        if(error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

    res.redirect('/contact');

});


app.listen(5000, () => {
    console.log('Portfolio server started..');
});