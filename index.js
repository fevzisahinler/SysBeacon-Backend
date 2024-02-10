const express = require('express');
require('dotenv').config();

const swaggerUI = require('swagger-ui-express');
const swaggerDocs = require('./swagger'); 

const authRoutes = require('./routes/authRoutes'); 

const app = express();

app.use(express.json());

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
