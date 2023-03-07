const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    img: {
        type: String,
        trim: true,
        default: '/images/product.jpg'
    },
    price: {
        type: Number,
        min: 0,
        default: 0
    },
    desc: {
        type: String,
        trim: true
    },
    reviews:[
        {
            //object id is a type in mongo
            //har product me kis kis id se review aaye hai hum wo store krege reviews array me(jiska ref hum review array se lenge)
            type:mongoose.Schema.Types.ObjectId,
            ref:'Review'
        }
    ]
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;