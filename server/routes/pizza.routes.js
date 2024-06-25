const CountryController = require("../controllers/pizza.controller")

// export routes
module.exports = (app) => {
    app.post('/api/pizza/new', CountryController.create)
    app.get('/api/pizza', CountryController.getAll)
    app.get('/api/pizza/:id', CountryController.getOne)
    app.delete('/api/pizza/delete/:id', CountryController.delete)
}