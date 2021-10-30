// /services/reducers/draggable-animal.js
import { UPDATE_TYPE } from "../actions/draggable";
import {listImages} from "../../testData";

const initialState = {
    animals: listImages

};

export const draggableReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_TYPE: {
            return {
                ...state,
                animals: [...state.animals].map(animal =>
                    animal.id === action.id ? {...animal, board: action.board} : animal
                )
            };
        }
        default:
            return state;
    }
}

