const cors = require('cors');
const express = require('express');
const axios = require('axios');

const app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.send('check /api')
});

app.get('/api', (request, response) => {
    axios.get('http://api.gios.gov.pl/pjp-api/rest/station/findAll')
        .then((res) => {
            response.send(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
});

app.listen(3000, () => {
    console.log('server is listening on port 3000');
});
