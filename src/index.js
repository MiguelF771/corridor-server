const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

const app = express();

app.listen(5000, () => {
    console.log('Server on port 5000');
});

app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res
        .status(200)
        .sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/', async (req, res) => {

    let time = new Date();
    let dataUser = req.body;
    let file = path.join(__dirname, 'dateUsers', dataUser.userData.Name+'-'+time.getTime().toString()+'.json');
    file = file.replace(/\s/g,'-');
    await fs.writeFile(file, JSON.stringify(dataUser), function (err) {
        if (err) throw err;
        console.log('Saved!');
    });

    res
        .send('Ok');
});