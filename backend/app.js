const cors = require('cors');
const express = require('express');
const axios = require('axios');

const app = express();
app.use(cors());

const port = process.env.PORT || 3000;

app.get('/', (request, response) => {
    response.send(`Build to proxy cors </br> 
    All Data obtained from <a target="_blank" href=https://powietrze.gios.gov.pl/pjp/content/api> GIOŚ API </a></br></br></br>
    Check endpoint "/stations" for all stations list </br>
    Check endpoint "/station/{id} for air quality index of specific station`)
});

//------------------ LIST OF ALL STATIONS
app.get('/stations', (request, response) => {
    axios.get('http://api.gios.gov.pl/pjp-api/rest/station/findAll')
        .then((res) => {
            response.send(res.data);
            console.log(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
});

//------------------ STATION AIR QUALITY INDEX
app.get('/station/:id', (request, response) => {
    let id = request.params.id;
    axios.get(`http://api.gios.gov.pl/pjp-api/rest/aqindex/getIndex/${id}`)
    .then((res => {
        response.send(res.data);
        console.log(res.data)
    }))
    .catch((err) => {
        console.log(err);
    })
});

app.listen(port, () => {
    console.log('server is listening on port 3000');
});
