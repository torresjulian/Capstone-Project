module.exports = function (app) {
    var vendors = require('../controllers/vendor.controller.js');
    app.get('/api/vendors', vendors.findAll);
    app.get('/api/vendors/:id', vendors.findById);
    app.post('/api/vendors', vendors.addVendor);
    app.put('/api/vendors/:id', vendors.updateById);
    app.delete('/api/vendors/:id', vendors.removeById);
}