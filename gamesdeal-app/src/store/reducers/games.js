const initialState = [];

export default function(state = initialState, action){
    
    switch (action.type) {
        case "ADD_GAMES_SUCCESS":
            return [...state, ...action.payload.data];
        case "SEARCH_GAMES_SUCCESS":
            return [...action.payload.data];  
        case "PRICE_GAMES_SUCCESS":
            return [...action.payload.data];    
        default:
            return state;
    }
        
}