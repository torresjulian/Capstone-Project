const User = require('../models/users.js');

exports.findAll = (req, res) => {
    User.find()
        .then(users => {
            res.send(users);
        }).catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
};
exports.findById = (req, res) => {
    User.findById(req.params.id, (err, user) => {
        if (err) throw err;
        res.send(user);
    });
};
exports.addUser = (req, res) => {
    User.create(req.body, (err, data) => {
        if (err) { throw err; }
        res.send(data);
    });
};
exports.removeById = (req, res) => {
    User.findByIdAndRemove(req.params.id, (err, user) => {
        if (err) throw err;
        res.send(user);
    });
}
exports.updateById = (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, (err, user) => {
        if (err) throw err;
        res.send(user);
    });
}