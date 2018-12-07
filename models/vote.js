var mongoose = require('mongoose');

var voteSchema = new mongoose.Schema({
    voteId : String,
    chairman: {
        type: [String]
    }
    // chairlady: {
    //     type: [String]
    // },
    // secretary: {
    //     type: [String]
    // },
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

module.exports = mongoose.model('Vote', voteSchema);
