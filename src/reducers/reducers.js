import { PLACEHOLDER } from '../actions/types';

const INITIAL_STATE = {
    key: ""
};

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case PLACEHOLDER:
            const variable = action.payload;
            return {
                ...state,
                variable
            };
        default:
            return state;
    }
}