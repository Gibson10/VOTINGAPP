var mongoose = require('mongoose');

var feedbackSchema = new mongoose.Schema({
    feedbackId : String,
    feedback1: {
        type: [Array]
    },
    });

module.exports = mongoose.model('Feedback', feedbackSchema);