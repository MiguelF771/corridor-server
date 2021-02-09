const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

const app = express();
let port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log('Server on port '+port);
});

app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res
        .status(200)
        .sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/stats', (req, res) => {
    res.send('<h1>Pagina en construccion</h1>');
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