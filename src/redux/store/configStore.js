import { createStore, combineReducers } from 'redux';
// import userReducer from './features/userSlice';

// export default configureStore({
//     reducer: {
//         user: userReducer
//     }
// })


const initState = {
    todos: [],
    posts: []
}

// Creating store
const store = createStore(myReducer);

export default store