const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
    text: String,
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User'
    },
    completed: Boolean
})

const Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo