const express = require('express');
const router = express.Router();
const BankCheque = require('../models/BankCheque');

// Create a new bank/cheque detail
router.post('/bankcheque', async (req, res) => {
    try {
        const { type, bankName, accountNumber, ifscCode, branchName, chequeNumber } = req.body;
        let newBankCheque;
        if (type === 'bank') {
            newBankCheque = new BankCheque({ type, bankName, accountNumber, ifscCode, branchName });
        } else {
            newBankCheque = new BankCheque({ type, bankName, accountNumber, ifscCode, branchName, chequeNumber });
        }
        await newBankCheque.save();
        res.status(201).json(newBankCheque);
    } catch (error) {
        console.error('Error creating bank/cheque detail:', error);
        res.status(500).json({ message: 'Server Error' });
    }
});

// Fetch all bank/cheque details
router.get('/bankcheque', async (req, res) => {
    try {
        const bankChequeDetails = await BankCheque.find();
        res.json(bankChequeDetails);
    } catch (error) {
        console.error('Error fetching bank/cheque details:', error);
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;
