const mongoose = require('mongoose');

const vendorSchema = new mongoose.Schema({
    vendorName: {
        type: String,
        required: true
    },
    businessName: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    panNo: {
        type: String,
        required: true
    },
    gstNo: {
        type: String,
        required: true
    }
});

const Vendor = mongoose.model('Vendor', vendorSchema);

module.exports = Vendor;
