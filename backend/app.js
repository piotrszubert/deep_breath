const cors = require('cors');
const express = require('express');
const axios = require('axios');

const app = express();
app.use(cors());

const port = process.env.PORT || 3000;

app.get('/', (request, response) => {
    response.send('build to proxy cors; check endpoint "/stations"')
});

app.get('/stations', (request, response) => {
    axios.get('http://api.gios.gov.pl/pjp-api/rest/station/findAll')
        .then((res) => {
            response.send(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
});

app.listen(port, () => {
    console.log('server is listening on port 3000');
});
