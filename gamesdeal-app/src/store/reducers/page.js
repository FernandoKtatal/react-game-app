const initialState = [1];

export default function page(state = initialState, action){
    switch (action.type) {
        case 'UPDATE_PAGE':
            return [action.payload.page]
        default:
            return state;
    }
}

