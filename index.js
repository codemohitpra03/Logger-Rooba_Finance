const express = require('express');
const app = express();
const {loggingMiddleware} = require('./middlewares/logger')

// Apply the logging middleware globally to all routes
app.use(loggingMiddleware);


app.get('/api/users', (req, res) => {
    res.send('List of users');
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
