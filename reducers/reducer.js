import place from "../models/places";

export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_PLACE':
            const newPlace = new place(new Date().toString(), action.payload.title)
            return {
                places: state.places.concat(newPlace)
            }
        default:
            return {state};
    }

} 