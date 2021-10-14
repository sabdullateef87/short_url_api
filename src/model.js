const mongoose = require('mongoose');

const UrlSchema = new mongoose.Schema({
    long_url: {
        type: String,
        required: true
    },
    short_url: {
        type: String,
        required: true
    },
    url_code: {
        type: String,
        required: true
    }
    },
    {timestamps: true}
)
const Url = mongoose.model("Url", UrlSchema)
module.exports = Url