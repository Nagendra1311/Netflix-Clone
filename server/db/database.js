const mongoose = require('mongoose');

const databaseConnection = async () => {


    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Database Connection successfully');
    } catch (error) {
        console.log(error.message);
    }

}


module.exports = databaseConnection;