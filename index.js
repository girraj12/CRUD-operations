import express from 'express';
import connection from './db.js';
import router from './routes/routes.js';

const app = express();
const port = 5000;

// Middleware to parse JSON
app.use(express.json());
app.use('/',router);

// Route to add a new expense
// Connect to the database and start the server
connection().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on ${port}`);
  });
});
