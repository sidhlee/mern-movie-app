const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const apiPort = 3000;

const db = require('./db');
const movieRouter = require('./routes/movie-router');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
// when you pass function directly, it's context is forgotten
// because you are passing the "reference" to the function 
// so you need to bind the context.
// you can instead pass: () => console.error('MongoDB...')
db.on('error', console.error.bind(console, 'MongoDB connectionerror: '));

app.get('/', (req, res) => {
    res.send('Hello!');
})

app.use('/api', movieRouter);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));

