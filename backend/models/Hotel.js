//Create Table into DB

import mongoose from "mongoose";

const HotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    image: {
        type:String,
        required: true
    },
    image1: {
        type:String,
        required: true
    },
    image2: {
        type:String,
        required: true
    },
    image3: {
        type:String,
        required: true
    },
    image4: {
        type:String,
        required: true
    },
    image5: {
        type:String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    rooms: {
        type: [String]
    },
    price: {
        type: Number,
        required: true
    },
    featured: {
        type: Boolean,
        default: false
    },
});

export default mongoose.model("Hotel", HotelSchema);