const mongoose = require('mongoose');

// remote db connection settings. For security, connectionString should be in a separate file not committed to git
const credentials = require('../credentials');


// local db connection settings 
// const ip = process.env.ip || '127.0.0.1';
// const connectionString = 'mongodb://' +ip+ '/<DB_NAME>';

mongoose.connect(credentials.connectionString, { dbName: "projects", useNewUrlParser: true, useUnifiedTopology: true }); 

mongoose.connection.on('open', () => {
  console.log('Mongoose connected.');
});

// Defining the model in JSON key/value pairs
// values indicate the data type of each key
const guitarSchema = mongoose.Schema({
 brand: { type: String, required: true },
 model: String,
 color: String,
 year: Number
}); 

module.exports = mongoose.model('Guitar', guitarSchema);
