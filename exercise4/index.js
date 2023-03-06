const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res) => {
    res.send('Hello world')
}) 

app.get('/test', (req, res) => {
    res.send('yuhuu')
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)})