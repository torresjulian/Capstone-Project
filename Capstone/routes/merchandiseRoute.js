module.exports = function (app) {
    var merch = require('../controllers/merchandise.controller.js');
    app.get('/api/merch', merch.findAll);
    app.get('/api/merchById/:id', merch.findMerchById);
    app.get('/api/merch/:merchName', merch.findByName);
    app.get('/api/merch/vendor/:vendorId', merch.findByVendorId);
    app.post('/api/merch', merch.addMerch);
    app.delete('/api/merch/:id', merch.removeById);
    app.put('/api/merch/:id', merch.updateById);
}