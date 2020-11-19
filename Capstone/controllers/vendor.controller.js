const Vendor = require('../models/vendor.js');

exports.findAll = (req, res) => {
    Vendor.find()
        .then(products => {
            res.send(products);
        }).catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
};
exports.findById = (req, res) => {
    Vendor.findById(req.params.id, (err, vendor) => {
        if (err) throw err;
        res.send(vendor);
    });
};
exports.addVendor = (req, res) => {
    Vendor.create(req.body, (err, data) => {
        if (err) { throw err; }
        res.send(data);
    });
};
exports.removeById = (req, res) => {
    Vendor.findByIdAndRemove(req.params.id, (err, vendor) => {
        if (err) throw err;
        res.send(vendor);
    });
}
exports.updateById = (req, res) => {
    Vendor.findByIdAndUpdate(req.params.id, req.body, (err, vendor) => {
        if (err) throw err;
        res.send(vendor);
    });
}