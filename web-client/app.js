const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const express = require('express');
const logger = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require("express-session");
const validator = require('validator');
const passport = require('passport');


require('./config/passport')(passport);
//const passport = require('passport');

const app = express();

const db = require('./config/db');
db.connect();

app.use(cookieParser());

// Middlewares
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(express.static(path.normalize(__dirname + '/../public')));

// Views engine
app.engine('hbs', exphbs({ extname: 'hbs' }));
app.set('view engine', 'hbs');

app.use(session({
    secret: 'HIHIVAHIHI',
    resave: true,
    saveUninitialized: true
}));



app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
    res.locals.user = req.user;
    next();
});

const indexRouter = require('./routes/index');
const cardRouter = require('./routes/card');
const cartRouter = require('./routes/cart');
//const loginRouter = require('./routes/login');
const usersRouter = require('./routes/users');

// Routes
app.use('/card', cardRouter);
app.use('/cart', cartRouter);
//app.use('/login', loginRouter);
app.use('/users', usersRouter);
app.use('/', indexRouter);

const PORT = 7000;
app.listen(PORT, () => console.log(`Sever is listening at port ${PORT}`));