const mongoose = require('mongoose'), Schema = mongoose.Schema;

const VendorSchema = mongoose.Schema({
    name: String
});

module.exports = mongoose.model('Vendor', VendorSchema);