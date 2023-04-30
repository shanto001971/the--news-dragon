const express = require('express');
const phones = require('./phones.json');
const app = express()
const port = 5000

app.get('/', (req, res) => {
    res.send('this is my fast surver is running')
})
app.get('/data',(req, res) => {
    res.send(phones)
})
app.get('/data/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const phone = phones.find( phone => phone.id ===id) || {};
    res.send(phone)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})