const express = require('express');
const app = express();

require('dotenv/config');

const api = process.env.API_URL;

// http://localhost:3000/api/v1/products
app.get('/', (req,res) => {
    res.send('Hello api');
})

app.listen(3000, () => {
    console.log(api);
    console.log('Server is running now on http://localhost:3000');
})