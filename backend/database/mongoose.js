const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://prashil:prashil%401993@cluster0.gcyq3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
        .then(() => console.log("Database Connected"))
        .catch((error) => console.log("Database Connection Error :",error));

module.exports = mongoose;