require('dotenv').config();

const express = require('express')


const app = express();

const {PORT} = process.env

app.listen(PORT, () => console.log(`${new Date()}, --- server listening on port: ${PORT}`))