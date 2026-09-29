let initialState = {
    users : localStorage.getItem('crud') ? JSON.parse(localStorage.getItem('crud')) : []
}
export const crudReducer = (state=initialState,action) => {

    switch(action.type){
        
        case 'adduser':
            let newUser = [...state.users,action.payload];
            localStorage.setItem('crud',JSON.stringify(newUser))
            return{
                ...state,
                users:newUser 
            }
            
        case 'deleteuser':
            let ddata = state.users.filter(val => val.id != action.payload)
            localStorage.setItem('crud',JSON.stringify(ddata))
            return{
                ...state,
                users:ddata
            };

        default:
            return state;
    }

}