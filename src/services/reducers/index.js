import { combineReducers } from 'redux';
import {targetReducer} from "./drop-target-reducer";
import {draggableReducer} from "./draggable-reducer";

export const rootReducer = combineReducers({
    boardList: targetReducer,
    animalList : draggableReducer

});