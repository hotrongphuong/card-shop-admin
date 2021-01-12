const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const express = require('express');
const logger = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');
require('express-async-errors');

const session = require("express-session")

const passport = require('passport');
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser());

const db = require('./config/db');
db.connect();

const app = express();

const indexRouter = require('./routes/index');
const cardRouter = require('./routes/card');
const cartRouter = require('./routes/cart');
const loginRouter = require('./routes/login');

// Initialize Passport
var initPassport = require('./passport/init');
initPassport(passport);

// Middlewares
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(express.static(path.normalize(__dirname + '/../public')));


// authentication
//app.use(session({secret: 'keyboard cat'}))

// Views engine
app.engine('hbs', exphbs({ extname: 'hbs' }));
app.set('view engine', 'hbs');

// Routes
app.use('/card', cardRouter);
app.use('/cart', cartRouter);
app.use('/login', loginRouter);
app.use('/', indexRouter);

//app.use('/login', )

const PORT = 3000;
app.listen(PORT, () => console.log(`Sever is listening at port ${PORT}`));