const initialState = {};

export default function userReducer(state = initialState, action) {
    switch(action.type){
        case 'LOGIN':{
            return {
                ...state,
                access_token:'token data'
            }
        }
        default:
            return state;
    }
}