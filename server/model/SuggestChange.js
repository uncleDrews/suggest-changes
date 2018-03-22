const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SuggestedChange = new Schema({
    articleUrl: {
        type: String,
        required: true
    },
    originalText: {
        type: String,
        required: true
    },
    usersText: {
        type: String
    },
    isApproved: {
        type: Boolean,
        default: false
    }
});
module.exports = SuggestedChange;