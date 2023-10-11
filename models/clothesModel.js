var mongoose = require('mongoose');
var clothesSchema = mongoose.Schema(
    {
        name : String,
        size : String,
        color : String,
        type : String,
        image : String,
        quantity : Number, 
        price : {
            type : Number,
            min : 200
        },
    }
)
var clothesModel = mongoose.model('clothes', clothesSchema, 'clothes');
module.exports = clothesModel;