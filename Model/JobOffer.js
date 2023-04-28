const mongoose = require("mongoose");

const JobOfferSchema = new mongoose.Schema({
    company: {
        type: String,
        required: true,
    },
    logo: {
        type: String,
        default : "https://seeklogo.com/images/T/the-plaza-new-york-logo-E3C98047C4-seeklogo.com.png",
    },
    logoBackground: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        required: true,
    },
    postedAt: {
        type: Date,
        default : Date.now(),
    },
    contract: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    website: {
        type: String,
        default : "#",
    },
    apply: {
        type: String,
        default : "#",
    },
    description: {
        type: String,
        required: true,
    },
    requirements: {
        content: {
            type: String,
            required: true,
        },
        items: {
            type: [String],
            required: true,
        },
    },
    role: {
        content: {
            type: String,
            required: true,
        },
        items: {
            type: [String],
            required: true,
        },
    }
})

module.exports = mongoose.model("JobOffer", JobOfferSchema);