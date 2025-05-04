const mongoose = require("mongoose");


const eventSchema = new mongoose.Schema ({
    name: {type: String},
    deadline: {type: Date}
});

const eventModel = mongoose.model("Events", eventSchema);

const itemSchema = new mongoose.Schema({
    name: {type: String},
    desc: {type: String},
    deadline: {type: Date},
    event: {type: String},
    inProgress: {type: Boolean},
    isCompleted: {type: Boolean}
});

const itemModel = mongoose.model("Items", itemSchema);

module.exports.eventModel = eventModel;
module.exports.itemModel = itemModel;