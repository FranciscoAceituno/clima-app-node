const axios = require('axios');


const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=a6c9b462ac9dab3ce763dd2d44c89107&units=metric`)

    return resp.data.main.temp;
};


module.exports = {
    getClima
}