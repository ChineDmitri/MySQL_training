const express = require('express');
const routerAnimal = require('./routes/animal')

const app = express();

app.use(express.json());

app.use('/api/animals', routerAnimal);

app.listen(process.env.PORT || '3000', () => {
    console.log(`Server is running on port: ${process.env.PORT || '3000'}`)
})
