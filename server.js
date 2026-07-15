const express = require('express'); // express connection
const connectDb = require('./config/db'); // mongoose connection
const path = require('path')

const app = express(); // express is stored in a var app

// Connect database
connectDb();

// Init Middleware
app.use(express.json({ extended:false }));

//define routes
app.use('/api/users', require('./routes/api/users')); // if server will receive any req starting from /api/users it will redirect them to routes->api->users file
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

//Serve static assets in production
if(process.env.NODE_ENV === 'production'){
    //Set static folder
    app.use(express.static('client/build'))

    app.get('*', (req, res) =>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));