const express = require('express')
const app = express()
const path = require('path');
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/index.html'));
})

app.get('/get', (req, res) => {
    res.send('GET REQUEST') 
})

app.post('/post', (req, res) => {
    console.log(req.body)
    res.send('POST REQUEST')
    res.json({ success: true })
})

app.put('/put', (req, res) => {
    res.send('PUT REQUEST')
    console.log(req.body)
})

app.delete('/delete', (req, res) =>{
    res.send('DELETE REQUEST')
    console.log(req.body)
})

app.listen(port, () => console.log(`App listening at http://localhost:3000`))