const mongoose = require('mongoose');

const connect = async () => {
    await mongoose.connect('mongodb://localhost:27017/yugioh_card-shop', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    });
    console.log("Database connect successfully!");
}

module.exports = { connect };