const express    = require('express');
const app        = express();
const bodyParser = require('body-parser') 
const mongoose   = require('mongoose');
const PORT       = process.env.PORT || 5000;
const router     = require('./routes/router');

app.use(bodyParser.json());
app.use('/', router);
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost:27017/API', { useNewUrlParser : true })  
    .then(result => console.log('MongoDB connected...'))
    .catch(err => console.error(err))

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});
