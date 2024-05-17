// // // // const express = require('express');
// // // // const mongoose = require('mongoose');
// // // // const cors = require('cors');
// // // // const paymentRoutes = require('./routes/paymentRoutes');
// // // // const counterRoutes = require('./routes/counterRoutes');

// // // // const app = express();

// // // // app.use(express.json());
// // // // app.use(cors());

// // // // mongoose.connect('mongodb://localhost:27017/test1', {
// // // //   useNewUrlParser: true,
// // // //   useUnifiedTopology: true,
// // // // })
// // // //   .then(() => console.log('Connected to MongoDB'))
// // // //   .catch(err => console.error('Failed to connect to MongoDB', err));

// // // // // Use the payment routes defined in paymentRoutes.js
// // // // app.use('/api/payments', paymentRoutes);
// // // // app.use('/api/counter', counterRoutes);


// // // // const PORT = process.env.PORT || 5000;
// // // // app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

// // // // server.js

// // // const express = require('express');
// // // const mongoose = require('mongoose');
// // // const cors = require('cors');
// // // const paymentRoutes = require('./routes/paymentRoutes');
// // // const counterRoutes = require('./routes/counterRoutes');
// // // const denominationRoutes = require('./routes/denominationRoutes'); // Add this line


// // // const app = express();

// // // app.use(express.json());
// // // app.use(cors());

// // // mongoose.connect('mongodb://localhost:27017/test1', {
// // //   useNewUrlParser: true,
// // //   useUnifiedTopology: true,
// // // })
// // //   .then(() => console.log('Connected to MongoDB'))
// // //   .catch(err => console.error('Failed to connect to MongoDB', err));

// // // // Use the payment routes defined in paymentRoutes.js
// // // app.use('/api/payments', paymentRoutes);
// // // app.use('/api/counter', counterRoutes);
// // // app.use('/api/denomination', denominationRoutes); // Add this line

// // // const PORT = process.env.PORT || 5000;
// // // app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));





// // const express = require('express');
// // const mongoose = require('mongoose');
// // const cors = require('cors');
// // const paymentRoutes = require('./routes/paymentRoutes');
// // const counterRoutes = require('./routes/counterRoutes');
// // const denominationRoutes = require('./routes/denominationRoutes');
// // const bankChequeRoutes = require('./routes/bankChequeRoutes'); // Add this line

// // const app = express();

// // app.use(express.json());
// // app.use(cors());

// // mongoose.connect('mongodb://localhost:27017/test1', {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true,
// // })
// //   .then(() => console.log('Connected to MongoDB'))
// //   .catch(err => console.error('Failed to connect to MongoDB', err));

// // // Use the payment routes defined in paymentRoutes.js
// // app.use('/api/payments', paymentRoutes);
// // app.use('/api/counter', counterRoutes);
// // app.use('/api/denomination', denominationRoutes);
// // app.use('/api/bankcheque', bankChequeRoutes); // Add this line

// // const PORT = process.env.PORT || 5000;
// // app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const paymentRoutes = require('./routes/paymentRoutes');
// const counterRoutes = require('./routes/counterRoutes');
// const denominationRoutes = require('./routes/denominationRoutes');
// const bankChequeRoutes = require('./routes/bankChequeRoutes');
// const vendorRoutes = require('./routes/vendorRoutes'); // Import vendorRoutes

// const app = express();

// app.use(express.json());
// app.use(cors());

// mongoose.connect('mongodb://localhost:27017/test1', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
//     .then(() => console.log('Connected to MongoDB'))
//     .catch(err => console.error('Failed to connect to MongoDB', err));

// // Use the routes
// app.use('/api/payments', paymentRoutes);
// app.use('/api/counter', counterRoutes);
// app.use('/api/denomination', denominationRoutes);
// app.use('/api', bankChequeRoutes); // Use bankChequeRoutes
//  app.use('/api', vendorRoutes); // Use vendorRoutes

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const paymentRoutes = require('./routes/paymentRoutes');
// const counterRoutes = require('./routes/counterRoutes');
// const denominationRoutes = require('./routes/denominationRoutes');
// const bankChequeRoutes = require('./routes/bankChequeRoutes');
// const vendorRoutes = require('./routes/vendorRoutes');

// const app = express();

// app.use(express.json());
// app.use(cors());

// mongoose.connect('mongodb://localhost:27017/test1', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
//     .then(() => console.log('Connected to MongoDB'))
//     .catch(err => console.error('Failed to connect to MongoDB', err));

// // Use the routes
// app.use('/api/payments', paymentRoutes);
// app.use('/api/counter', counterRoutes);
// app.use('/api/denomination', denominationRoutes);
// app.use('/api/bankcheque', bankChequeRoutes); 
// app.use('/api/vendor', vendorRoutes); 
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const paymentRoutes = require('./routes/paymentRoutes');
const counterRoutes = require('./routes/counterRoutes');
const denominationRoutes = require('./routes/denominationRoutes');
const bankChequeRoutes = require('./routes/bankChequeRoutes');
const vendorRoutes = require('./routes/vendorRoutes');
const authRoutes = require('./routes/authRoutes');
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/test1', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Failed to connect to MongoDB', err));

// Use the routes
app.use('/api/auth', authRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/counter', counterRoutes);
app.use('/api/denomination', denominationRoutes);
app.use('/api/bankcheque', bankChequeRoutes); 
app.use('/api/vendor', vendorRoutes); 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
