import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './Redux/reducers/_index';

const initialState = {};

const middleware = [thunk]; // thunk is for async actions

export const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export const persistor = persistStore(store);

export default { store, persistor};