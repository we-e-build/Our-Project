const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/project6', { useNewUrlParser: true });
const db = mongoose.connection;

db.on('error', function () {
    console.log('mongoose connection error');
    console.log('____________________________')
});

db.once('open', function () {
    console.log('mongoose connected successfully');
    console.log('____________________________')
});


module.exports = {}