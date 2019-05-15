import Dispatcher from '../dispatchers';
import ActionTypes from '../constants';
import GRAPI from '../utils/index';

class TequilioActions {
    getTequileros() {
        Dispatcher.dispatch({
            actionType: ActionTypes.API_CALL
        });

        GRAPI.getTequileros();
    }

    receiveTequileros(payload) {
        Dispatcher.dispatch({
            actionType: ActionTypes.API_TQ_RETURN,
            payload: payload
        });
    }

    changeTequilera(newTequilera) {
        Dispatcher.dispatch({
            actionType: ActionTypes.CHANGE_TEQUILERA,
            payload: newTequilera
        });
    }

    getTequileroTequilas(tequilero) {
        Dispatcher.dispatch({
            actionType: ActionTypes.API_CALL
        });

        GRAPI.getTequileroTequilas(tequilero);
    }

    receiveTequilerosTequilas(payload) {
        Dispatcher.dispatch({
            actionType: ActionTypes.API_TT_RETURN,
            payload: payload
        });
        console.log(payload);
    }

    getSkuBotella(sku) {
        Dispatcher.dispatch({
            actionType: ActionTypes.API_CALL
        });

        GRAPI.getBotella(sku);
    }

    receiveSkuBotella(payload) {
        Dispatcher.dispatch({
            actionType: ActionTypes.API_SKU_RETURN,
            payload: payload
        });
        console.log(payload);
    }

    getHistorial(user, pwd) {
        Dispatcher.dispatch({
            actionType: ActionTypes.API_CALL
        });

        GRAPI.getHistorial(user);
    }

    receiveHistorial(payload) {
        Dispatcher.dispatch({
            actionType: ActionTypes.API_HS_RETURN,
            payload: payload
        });
        console.log(payload);
    }
}

export default new TequilioActions();