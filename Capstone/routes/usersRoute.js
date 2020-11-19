module.exports = function (app) {
    var users = require('../controllers/users.controller.js');
    app.get('/api/users', users.findAll);
    app.get('/api/users/:id', users.findById);
    app.post('/api/users', users.addUser);
    app.put('/api/users/:id', users.updateById);
    app.delete('/api/users/:id', users.removeById);
}