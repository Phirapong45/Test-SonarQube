const express = require('express');
const calculate = require('./services/complexity');
const add = require('./services/duplication');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, SonarQube!');
});

app.post('/calculate', (req, res) => {
    console.log(req.body);
    const { value } = req.body;
    const results = calculate(value);
    const response = { value, results }
    res.status(200).json({ response });
});

app.post('/duplication', (req, res) => {
    console.log(req.body);
    const { num1, num2 } = req.body;
    const results = add(num1, num2);
    const response = { num1, num2, results }
    res.status(200).json({ response });
});

app.listen(port, () => {
    console.log(`Test SonarQube listening at http://localhost:${port}`);
});
