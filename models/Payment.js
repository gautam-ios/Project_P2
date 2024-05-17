// // models/Payment.js
// const mongoose = require('mongoose');

// const paymentSchema = new mongoose.Schema({
//   paymentType: String,
//   paymentDate: Date,
//   paymentNumber: String,
//   paymentTo: String,
//   paymentAmount: Number,
//   paymentRemark: String,
// });

// const Payment = mongoose.model('Payment', paymentSchema);

// module.exports = Payment;
const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  paymentType: {
    type: String,
    enum: ['cash', 'check'],
    required: true
  },
  paymentDate: {
    type: Date,
    required: true
  },
  paymentNumber: {
    type: String,
    required: true
  },
  paymentTo: {
    type: String,
    required: true
  },
  paymentAmount: {
    type: Number,
    required: true
  },
  paymentRemark: {
    type: String
  },
  // Fields specific to check payments
  checkNumber: {
    type: String,
    required: function () {
      return this.paymentType === 'check';
    }
  },
  bankAccountNumber: {
    type: String,
    required: function () {
      return this.paymentType === 'check';
    }
  },
  paymentFrom: {
    type: String,
    required: function () {
      return this.paymentType === 'check';
    }
  },
  sectionName: {
    type: String,
    required: function () {
      return this.paymentType === 'check';
    }
  }
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;
