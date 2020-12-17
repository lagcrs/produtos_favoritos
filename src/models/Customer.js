const { Schema, model } = require('mongoose');

// bcrypt for generate hash password
const bcrypt = require('bcryptjs');

// Customer Schema
const CustomerSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        unique: true,
        require: true,
        lowercase: true
    },
    password: {
        type: String,
        require: true,
        select: false
    },
    favoriteProducts: []
}, {
    timestamps: true
});

// creating password hash before save new customer 
CustomerSchema.pre('save', async function(next){
    const hash = await bcrypt.hash(this.password, 10)
    this.password = hash;
    next()
});

module.exports = model('Customer', CustomerSchema);