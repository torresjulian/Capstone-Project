const Merchandise = require('../models/merchandise');

exports.findAll = (req, res) => {
    Merchandise.find()
        .then(merch => {
            res.send(merch);
        }).catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
};
exports.findByName = (req, res) => {
    Merchandise.findOne({ name: req.params.merchName })
        .populate('vendor')
        .exec(function (err, merch) {
            if (err) {
                if (err.kind === 'ObjectId') {
                    return res.status(404).send({
                        message: "Merch not found with given name " + req.params.merchName
                    });
                }
                return res.status(500).send({
                    message: "Error retrieving Merchadise with given Vendor Id " + req.params.merchName
                });
            }

            res.send(merch);
        });
};
exports.findByVendorId = (req, res) => {
    Merchandise.find({ company: req.params.vendorId })
        .exec(function (err, merch) {
            if (err) {
                if (err.kind === 'ObjectId') {
                    return res.status(404).send({
                        message: "Merchandiese not found with given Vendor Id " + req.params.vendorId
                    });
                }
                return res.status(500).send({
                    message: "Error retrieving Merchandise with given Vendor Id " + req.params.vendorId
                });
            }

            res.send(merch);
        });
};
exports.addMerch = (req, res) => {
    Merchandise.create(req.body, (err, data) => {
        if (err) throw err;
        res.send(data);
    })
}
exports.findMerchById = (req, res) => {
    Merchandise.findById(req.params.id, (err, merch) => {
        if (err) throw err;
        res.send(merch);
    })
};
exports.removeById = (req, res) => {
    Merchandise.findByIdAndRemove(req.params.id, (err, merch) => {
        if (err) throw err;
        res.send(merch);
    })
}
exports.updateById = (req, res) => {
    Merchandise.findByIdAndUpdate(req.params.id, req.body, (err, vendor) => {
        if (err) throw err;
        res.send(vendor);
    });
}