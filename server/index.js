const express = require('express');
const dotenv = require('dotenv');
const databaseConnection = require('./db/database');
const cookieParser = require('cookie-parser');
const router = require('./routes/userRoute')
const cors = require('cors');


dotenv.config({
    path: ".env"
})
// app
const app = express();

const corsOption = {
    origin: 'http://localhost:3000',
    credentials: true
}

// cors
app.use(cors(corsOption))

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

//routes
app.use('/api/user', router);

//database
databaseConnection()

//Port 
const PORT = process.env.PORT;

// app listen
app.listen(PORT, () => {
    console.log(`Server is listening on port no ${PORT}`);
})