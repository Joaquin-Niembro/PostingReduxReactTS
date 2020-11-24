import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import {postsReducer} from './reducers'
import {Ipost} from './action/Posts'
export interface StoreState {
    posts: Ipost[]|any
}
const reducers = combineReducers<StoreState>({
    posts: postsReducer
});
export const store = createStore(reducers, applyMiddleware(thunk));
