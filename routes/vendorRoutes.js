const express = require('express');
const router = express.Router();
const Vendor = require('../models/Vendor');

// Create a new vendor
router.post('/', async (req, res) => {
    try {
        const { vendorName, businessName, phone, email, address, panNo, gstNo } = req.body;
        const newVendor = new Vendor({ vendorName, businessName, phone, email, address, panNo, gstNo });
        await newVendor.save();
        res.status(201).json(newVendor);
    } catch (error) {
        console.error('Error creating vendor:', error);
        res.status(500).json({ message: 'Server Error' });
    }
});

// Fetch all vendors
router.get('/', async (req, res) => {
    try {
        const vendorDetails = await Vendor.find({}, { vendorName: 1, phone: 1 });
        res.json(vendorDetails);
    } catch (error) {
        console.error('Error fetching vendors:', error);
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;
