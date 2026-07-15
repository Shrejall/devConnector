const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI'); // import the connection string

const connectDb = async () => {
    try{
        // await mongoose.connect(db, {
        //     useNewUrlParser: true,
        //     useCreateIndex: true
        // });
        await mongoose.connect(db);
        console.log('Mongoose connected...');
    }
    catch(err){
        console.error(err.message);
        //Exit process with failure
        process.exit(1);
    }
}

module.exports= connectDb;
