const express = require('express');

const app = express();
const PORT = process.env.port || 3001;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static('public'));


app.listen(PORT, () =>
  console.log(`Express server listening on port http://localhost:${PORT}`)
);