const mongoose = require("mongoose");
exports.connect = function () {
    return mongoose.connect('mongodb://localhost/test');
}
exports.SuggestedChanges = mongoose.model('SuggestedChanges', require("../model/SuggestChange"));

