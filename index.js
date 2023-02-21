const express = require('express');
const app = require('express')();
const PORT = 4000;

app.use( express.json())

app.listen(
    PORT,
    ()=>console.log(`its on http://localhost:${PORT}`)
)

app.get('/shoes', (req, res) => {
    res.status(200).send({
        quantity: '4',
        size: '10',
        Category: 'Formal'
    })
})

app.post('/shoes/:id', (req, res) => {
    const { id } = req.params;
    const { logo } = req.body;
    if (!logo) {
        res.status(418).send({ message: 'We need a logo!' })
    }

    res.send({
        shoes: `your ${logo} and of ID ${id}`
    })
})