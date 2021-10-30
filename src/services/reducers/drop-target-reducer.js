
const initialState = {
    boards: ["default", "fish", "mammals", "insects"]
};

export const targetReducer = (state = initialState, action) => {
    switch (action.type) {

        default: {
            return state;
        }
    }
};