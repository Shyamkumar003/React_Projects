import { legacy_createStore as createStore,applyMiddleware, combineReducers } from 'redux';
// import usersSlice from "./reducers/usersSlice";
import {thunk} from 'redux-thunk';
import {postsReducer} from './reducers/postsReducer'


// export const storeData = configureStore({
//     reducer:{
//     // usersSlice:usersSlice,
//     postsReducer : postsReducer
//     }
 const rootReducer = combineReducers({
         posts : postsReducer
})

export const storeData = createStore(rootReducer, applyMiddleware(thunk))