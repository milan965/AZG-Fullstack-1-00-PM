let initialState = {
    users : []
}

export const crudReducer = (state=initialState,action) => {

    switch(action.type){

        case 'add':
            return{
                ...state,
                users:[...state.users,action.payload]
            };

         case 'view':
            return{
                ...state,
                users:action.payload
            };

        default:
            return state;

    }

}