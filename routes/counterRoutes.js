// // // routes/counterRoutes.js

// // const express = require('express');
// // const router = express.Router();
// // const Counter = require('../models/Counter');

// // // Create a new counter
// // router.post('/', async (req, res) => {
// //   try {
// //     const { name } = req.body;
// //     const newCounter = new Counter({ name });
// //     await newCounter.save();
// //     res.status(201).json(newCounter);
// //   } catch (error) {
// //     console.error('Error creating counter:', error);
// //     res.status(500).json({ message: 'Server Error' });
// //   }
// // });

// // // Fetch all counters
// // router.get('/', async (req, res) => {
// //   try {
// //     const counters = await Counter.find();
// //     res.json(counters.map(counter => counter.name));
// //   } catch (error) {
// //     console.error('Error fetching counters:', error);
// //     res.status(500).json({ message: 'Server Error' });
// //   }
// // });

// // module.exports = router;
// // routes/counterRoutes.js

// const express = require('express');
// const router = express.Router();
// const Counter = require('../models/Counter');

// // Create a new counter
// router.post('/', async (req, res) => {
//     try {
//         const { counterName } = req.body;
//         if (!counterName) {
//             return res.status(400).json({ message: 'Counter name is required' });
//         }
//         const newCounter = new Counter({ name: counterName });
//         await newCounter.save();
//         res.status(201).json(newCounter);
//     } catch (error) {
//         console.error('Error creating counter:', error);
//         res.status(500).json({ message: 'Server Error' });
//     }
// });

// // Fetch all counters
// router.get('/', async (req, res) => {
//     try {
//         const counters = await Counter.find();
//         res.json(counters.map(counter => counter.name));
//     } catch (error) {
//         console.error('Error fetching counters:', error);
//         res.status(500).json({ message: 'Server Error' });
//     }
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const Counter = require('../models/Counter');

// Create a new counter
router.post('/', async (req, res) => {
    try {
        const { counterName } = req.body;
        if (!counterName) {
            return res.status(400).json({ message: 'Counter name is required' });
        }
        const newCounter = new Counter({ name: counterName });
        await newCounter.save();
        res.status(201).json(newCounter);
    } catch (error) {
        console.error('Error creating counter:', error);
        res.status(500).json({ message: 'Server Error' });
    }
});

// Fetch all counters
router.get('/', async (req, res) => {
    try {
        const counters = await Counter.find();
        res.json(counters.map(counter => counter.name));
    } catch (error) {
        console.error('Error fetching counters:', error);
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;
