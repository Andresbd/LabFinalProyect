/** Amplify API **/
import { API, graphqlOperation } from 'aws-amplify';
import { getTequilera, listTequileras, listTequilass, listHistorials } from '../graphql/queries';
import TequilioActions from '../actions/TequilioActions';

class GRAPI {
    async getTequileros() {
        try {
            const result = await API.graphql(graphqlOperation(listTequileras));
            TequilioActions.receiveTequileros(result.data.listTequileras.items);
        } catch (error) {
            console.error(error);
        }
    }

    async getTequileroTequilas(tequilero) {
        try {
            const input = { id: tequilero };
            const result = await API.graphql(graphqlOperation(getTequilera, input));
            TequilioActions.receiveTequilerosTequilas(result);
        } catch (error) {
            console.error(error);
        }
    }

    async getBotella(sku) {
        try {
            const input = {
                "filter": {
                    "sku": {
                        "eq": sku
                    }
                }
            };
            const result = await API.graphql(graphqlOperation(listTequilass, {input}));
            TequilioActions.receiveSkuBotella(result);
        } catch (error) {
            console.error(error);
        }
    }

    async getHistorial(user) {
        try {
            const input = {
                "filter": {
                    "user" : {
                        "eq": user
                    }
                }
            };
            const result = await API.graphql(graphqlOperation(listHistorials, {input}));
            TequilioActions.receiveHistorial(result);
        } catch (error) {
            console.error(error);
        }
    }
}

export default new GRAPI();

/* OLD API
import TequilioActions from '../actions/TequilioActions';

var request = require('superagent');

class API {
    getTequileros() {
        request.get('http://localhost:5000/api/tequileros')
        .set('Accept', 'application/json')
        .end((err, response) => {
            if (err) return console.error(err);

            //console.log(response.body.tequileros);
            var payload = {};
            payload.tequileros = response.body.tequileros;

            TequilioActions.receiveTequileros(payload);
        });
    }

    getTequileroTequilas(tequilero) {
        request.get('http://localhost:5000/api/tequileros/' + tequilero)
        .set('Accept', 'application/json')
        .end((err, response) => {
            if (err) return console.error(err);

            var payload = {};
            payload.tequilas = response.body.tequilas;

            TequilioActions.receiveTequilerosTequilas(payload);
        });
    }

    getBotella(sku, user, pwd) {
        request.get('http://localhost:5000/api/tequileros/tequila/' + sku + '/' + user + '/' + pwd)
        .set('Accept', 'application/json')
        .end((err, response) => {
            if (err) return console.error(err);

            var payload = {};
            payload.botella = response.body.tequila;

            TequilioActions.receiveSkuBotella(payload);
        });
    }

    getBotellaInsecure(sku) {
        request.get('http://localhost:5000/api/tequileros/tequila/' + sku)
        .set('Accept', 'application/json')
        .end((err, response) => {
            if (err) return console.error(err);

            console.log('botella insecure');
            var payload = {};
            payload.botella = response.body.tequila;

            TequilioActions.receiveSkuBotella(payload);
        });
    }

    getHistorial(user, pwd) {
        request.get('http://localhost:5000/api/users/historial/' + user + '/' + pwd)
        .set('Accept', 'application/json')
        .end((err, response) => {
            if (err) return console.error(err);

            var payload = {};
            payload.historial = response.body.historial;

            TequilioActions.receiveHistorial(payload);
        })
    }
}

export default new API(); */