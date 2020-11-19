const express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    cors = require('cors'),
    config = require('./db'),
    userRoute = require('./routes/userRoute'),
    PORT = process.env.PORT || 5000,
    app = express();
    
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.connect(config.DB).then(
    () => { console.log('Database is connected') },
    err => { console.log('Can not connect to the database' + err) }
);
let corsOptions = {
    origin: ['http://localhost:4200', 'http://localhost:4300'],
    optionsSuccessStatus: 200
}
app.use(bodyParser.urlencoded( { extended: false } ));
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use('/api/users', userRoute);
require('./routes/merchandiseRoute.js')(app);
require('./routes/vendorRoute.js')(app);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});