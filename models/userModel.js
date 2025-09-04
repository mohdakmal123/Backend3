const mongoose = require ('../connection');


const mySchema = new  mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: { type: String, required: true },
    city: { type: String, default: 'unknown' },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('users', mySchema); // users is collection name