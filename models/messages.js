var mongoose = require('mongoose');

var MessageSchema = new mongoose.Schema({
    MessageId : String,
    message: {
        type: [String]
    },
    name: {
        type: [String]
    },
    email: {
        type: [String]
    },
    // academic_rep: {
    //     type: [String]
    // },
    // clubs_rep: {
    //     type: [String]
    // },
    // entertainment_rep: {
    //     type: [String]
    // },
    // it_rep: {
    //     type: [String]
    // },
    // sports_rep: {
    //     type: [String]
    // },
    // wellness_rep: {
    //     type: [String]
    // },
    // treasurer: {
    //     type: [String]
    // },
    // honor_council: {
    //     type: [String]
    // }
});

module.exports = mongoose.model('Message', MessageSchema);

