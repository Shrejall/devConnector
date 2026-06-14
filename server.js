const express = require('express');

const app = express(); // express is stored in a var app

app.get('/', (req,res) => res.send('API running, which means express is running properly'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));