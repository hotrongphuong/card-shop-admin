const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const express = require('express');
const logger = require('morgan');
require('express-async-errors');

const db = require('./config/db');
db.connect();

const app = express();

const indexRouter = require('./routes/index');
const categoryRouter = require('./routes/category');
const cardRouter = require('./routes/card');

// Middlewares
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

// Views engine
app.engine('hbs', exphbs({ extname: 'hbs' }));
app.set('view engine', 'hbs');

app.set('img', __dirname + '/public')
// Routes
app.use('/', indexRouter);
app.use('/category', categoryRouter);
app.use('/card', cardRouter);

const PORT = 3000;
app.listen(PORT, () => console.log(`Sever is listening at port ${PORT}`));


