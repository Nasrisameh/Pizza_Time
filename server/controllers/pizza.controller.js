const { Pizza}=require('../models/pizza.model')

// ===========CREATE==============
module.exports.create = (request, response) => {
    Pizza.create(request.body)
        .then(object =>response.status(200).json(object))
        .catch(err=> response.status(400).json(err))
}

// =============READ ALL===========
module.exports.getAll = (request, response) => {
    Pizza.find({})
        .then(objects =>response.json(objects))
        .catch(err=> response.json(err))
}

// ==============READ ONE===========
module.exports.getOne = (request, response) => {
    Pizza.findOne({_id:request.params.id})
        .then(object =>response.json(object))
        .catch(err=> response.json(err))
}

// ============DELETE==============
module.exports.delete = (request, response) => {
    Pizza.deleteOne({_id:request.params.id})
        .then(deleteConfirmation =>response.json(deleteConfirmation))
        .catch(err=> response.json(err))
}