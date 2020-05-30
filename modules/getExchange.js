const tcmb = require('tcmb-exchange-rates');

const getExchange = (type) => {
    tcmb(type)
        .then((data) => {
            return(data);
        })
        .catch((err) => {
            return err;
        })
}

module.exports = getExchange;