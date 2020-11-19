const mongoose = require('mongoose'), Schema = mongoose.Schema;

const MerchandiseSchema = mongoose.Schema({
    code: String,
    name: String,
    details: String,
    image: String,
    price: Number,
    vendor: { type: Schema.Types.ObjectId, ref: 'Vendor' }
});

module.exports = mongoose.model('Merchandise', MerchandiseSchema);