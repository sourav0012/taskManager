const mongoose = require('../database/db1')


const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },

    description: {
        type: String,
    },

    completed:{
        type: Boolean,
        default: false,
    }

},{timestamps: true}

)

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;