const initialState = [1];

export default function(state = initialState, action){
    
    switch (action.type) {
        case "UPLOAD_PAGE_SUCCESS":
            return [...action.payload.page];   
        default:
            return state;
    }
        
}