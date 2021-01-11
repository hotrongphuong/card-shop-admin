const mongoose = require('mongoose');

const connect = async () => {
    await mongoose.connect('mongodb+srv://htp:200100@cluster0.cxknj.mongodb.net/card-shop?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    });
    console.log("Database connect successfully!");
}

module.exports = { connect };