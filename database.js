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




let signUpSchema = {
    name: String,
    email: String,
    password: String,
    mobile: Number,
};

let postsSchema = {
    img: String,
    category: String,
    state: String,
    description: String

};



let signUp = mongoose.model("signUp", signUpSchema);
let posts = mongoose.model("posts", postsSchema);

module.exports = { signUp, posts, }