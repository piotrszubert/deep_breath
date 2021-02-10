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

            // all stations IDs
            for (let i= 0; i < res.data.length; i++) {
                //console.log(res.data[i].id);
                

                //LINKS TO STATION AIR INDEX
                console.log(`http://api.gios.gov.pl/pjp-api/rest/aqindex/getIndex/${res.data[i].id}`);
          /*       axios.get(`http://api.gios.gov.pl/pjp-api/rest/aqindex/getIndex/${res.data[i].id}`)
                .then((res) => {
                    console.log(res.data);
                })
                .catch((err) => {
                    console.log(err);
                }) */
            }
        })
        .catch((err) => {
            console.log(err);
        })
});

//indeks jakosci powietrza
//http://api.gios.gov.pl/pjp-api/rest/aqindex/getIndex/{stationId}


app.listen(port, () => {
    console.log('server is listening on port 3000');
});
