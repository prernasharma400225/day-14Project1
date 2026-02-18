const mongoose = require("mongoose")

const followSchema = new mongoose.Schema({
    follower: {
        type: String,
    },
    followee: {
        type: String,
    },
    status:{
        type: String,
        default: "pending",
        enum:{
            values: ["pending", "accepted", "rejected"],
            message: "status can only be pending, accepted or rejected"
        }
    }
},{
    timestapms: true
}
)


followSchema.index({ follow: 1, followee: 1 }, { unique: true })

const followModel = mongoose.model("followee", followSchema)

module.exports = followModel