const request = require('request');

const forcast = (lang, long, cb) => {
    const url = `http://api.weatherstack.com/current?
    access_key=dd64ebbe910add0ce9aaa71053fcf81e&query=${long},${lang}&units=f`;
    
    request({url, json: true}, (err, {body}) => {
        cb(undefined, {
            temp: body.current.temperature
        })
    })
    }

module.exports = forcast;