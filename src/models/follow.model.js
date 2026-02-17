const mongoose = require("mongoose")

const followSchema = new mongoose.Schema({
    follower: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: [true, "Foller is required"]
    },
    following: {
        type:mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: [true, "Following is required"]
    }
},{
    timestapms: true
}
)

const followModel = mongoose.model("following", followSchema)

module.exports = followModel