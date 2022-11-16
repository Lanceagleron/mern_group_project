const express = require('express');
const cors = require('cors');
const port = 8000;
const { menuItemsRouter } = require('./routes/menuItem.routes'); 
const { tablesRouter } = require('./routes/table.routes');

require('./config/mongoose.config');

const app = express(); // initialize express app

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/menuItems', menuItemsRouter); // Menu items routes
app.use('/api/tables', tablesRouter); // Tables routes

app.listen(port, () => {
    console.log(`You are listening on port ${port} for requests to respond to.`)
});
