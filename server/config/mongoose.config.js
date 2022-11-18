const mongoose = require('mongoose');

// TODO: update db name
const dbName = 'mern_project';

mongoose
    .connect(`mongodb://127.0.0.1:27017/${dbName}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log(`Established connection to database ${dbName}`)
    })
    .catch((error) => {
        console.log("Hmph something went wrong", error)
    })