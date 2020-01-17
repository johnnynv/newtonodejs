const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name:{type:String,required:true,max:100},
    price:{type:Number,required:true},
});

module.exports = mongoose.model('Product',productSchema);