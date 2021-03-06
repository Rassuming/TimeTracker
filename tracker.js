const path = require('path');
const express = require('express');

const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.listen(8002, () => {
    console.log("Express running on 8002");
})