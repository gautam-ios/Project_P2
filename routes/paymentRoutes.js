// // // routes/paymentRoutes.js
// // const express = require('express');
// // const router = express.Router();
// // const Payment = require('../models/Payment');

// // // Create a new payment
// // router.post('/', async (req, res) => {
// //   try {
// //     const newPayment = new Payment(req.body);
// //     await newPayment.save();
// //     res.status(201).json(newPayment);
// //   } catch (err) {
// //     console.error(err.message);
// //     res.status(500).send('Server Error');
// //   }
// // });

// // module.exports = router;   
// const express = require('express');
// const router = express.Router();
// const Payment = require('../models/Payment');

// // Create a new payment
// router.post('/', async (req, res) => {
//   try {
//     const newPayment = new Payment(req.body);
//     await newPayment.save();
//     res.status(201).json(newPayment);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server Error');
//   } 
// });

// // Fetch all payments
// router.get('/', async (req, res) => {
//   try {
//     const payments = await Payment.find();
//     res.json(payments);
//   } catch (error) {
//     console.error('Error fetching payments:', error);
//     res.status(500).json({ message: 'Server Error' });
//   }
// });

// module.exports = router;
// routes/paymentRoutes.js
const express = require('express');
const router = express.Router();
const Payment = require('../models/Payment');

// Create a new payment
router.post('/', async (req, res) => {
  try {
    const newPayment = new Payment(req.body);
    await newPayment.save();
    res.status(201).json(newPayment);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  } 
});

// Fetch all payments
router.get('/', async (req, res) => {
  try {
    const payments = await Payment.find();
    res.json(payments);
  } catch (error) {
    console.error('Error fetching payments:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Fetch top payments for the current fiscal year
router.get('/top', async (req, res) => {
  try {
    const currentYear = new Date().getFullYear();
    const topPayments = await Payment.find({ paymentDate: { $gte: new Date(currentYear, 0, 1) } })
                                      .sort({ paymentAmount: -1 })
                                      .limit(4);
    res.json(topPayments);
  } catch (error) {
    console.error('Error fetching top payments:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
