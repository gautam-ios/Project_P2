const mongoose = require('mongoose');

const bankChequeSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['bank', 'cheque'],
        required: true
    },
    bankName: {
        type: String,
        required: true
    },
    accountNumber: {
        type: String,
        required: true
    },
    ifscCode: {
        type: String,
        required: true
    },
    branchName: {
        type: String,
        required: true
    },
    chequeNumber: String
});

const BankCheque = mongoose.model('BankCheque', bankChequeSchema);

module.exports = BankCheque;
