// routes/DenominationRoutes.js

const express = require('express');
const router = express.Router();
const Denomination = require('../models/Denomination');

// Create a new denomination
router.post('/', async (req, res) => {
    try {
        const { name } = req.body;
        if (!name) {
            return res.status(400).json({ message: 'Denomination name is required' });
        }
        const newDenomination = new Denomination({ name });
        await newDenomination.save();
        res.status(201).json(newDenomination);
    } catch (error) {
        console.error('Error creating denomination:', error);
        res.status(500).json({ message: 'Server Error' });
    }
});

// Fetch all denominations
router.get('/', async (req, res) => {
    try {
        const denominations = await Denomination.find();
        res.json(denominations.map(denomination => denomination.name));
    } catch (error) {
        console.error('Error fetching denominations:', error);
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;
