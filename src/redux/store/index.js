import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'reducers';

const middleware = [thunk];

if (process.env.NODE_ENV === 'development') {
    const { createLogger } = require('redux-logger');
    middleware.push(createLogger({ collapsed: true }));
}

if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('reducers', () => {
        const updatedReducer = require('reducers').default;
        store.replaceReducer(updatedReducer);
    });
}

const store = createStore(rootReducer, applyMiddleware(...middleware));

export {
    store
};