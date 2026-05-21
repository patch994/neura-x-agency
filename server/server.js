const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const morgan = require('morgan');
const path = require('path');
const connectDB = require('./config/db');

// Load env vars
dotenv.config({ path: '../.env' });
if (!process.env.MONGO_URI) {
    dotenv.config(); // try local if not in parent
}

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(helmet({
    contentSecurityPolicy: false, // For development and custom effects
}));
app.use(cors());
app.use(express.json());
app.use(compression());
app.use(morgan('dev'));

// Static folder for uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/services', require('./routes/services'));
// app.use('/api/portfolio', require('./routes/portfolio'));
// app.use('/api/blog', require('./routes/blog'));
// app.use('/api/contact', require('./routes/contact'));

app.get('/', (req, res) => {
  res.send('NEURA X API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});
