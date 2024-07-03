const express = require('express');
const taskRoutes = require('./routes/taskRoutes');
const loginRoute = require('./routes/loginRoute'); // Import the login route
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(express.json());

app.use('/api', loginRoute); // Add the login route
app.use('/api', taskRoutes); // Add the task routes

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
