import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// All reducers


// persist config 
const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: [] // you want to persist in localstorage
}

// combining all reducers
const rootReducer = combineReducers({

});

export default persistReducer(persistConfig, rootReducer);