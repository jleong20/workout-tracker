const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cardioSchema = new Schema({
    name: {
        type: String
    },
    distance:{
        type: Number
    },
    duration:{
        type: Number
    }
});
const resistanceSchema = new Schema({
    exerciseName:{
        type: String
    },
    weight:{
        type: Number
    },
    sets:{
        type:Number
    },
    reps:{
        type:Number
    },
    duration:{
        type: Number
    }
});
const Cardio = mongoose.model("cardio", cardioSchema);

const Resistance = mongoose.model("resistance", resistanceSchema);

module.exports = Cardio;
module.exports = Resistance;