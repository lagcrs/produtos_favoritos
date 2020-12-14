//database config and connection file
const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://user:${process.env.DB_PASS}@cluster0.c7czm.mongodb.net/<dbname>?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
})

module.exports = mongoose;