let initialState = {
    users : localStorage.getItem('crud') ? JSON.parse(localStorage.getItem('crud')) : [],
    single : null
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

        
        case 'edituser':
            let edit = state.users.find(value => value.id == action.payload)
         
        return{
            ...state,
            single : edit
        };

        case 'updateuser':
            const {id,name,age} = action.payload;

            let up = state.users.map((val)=>{
                if(val.id == id){
                    val.name = name;
                    val.age = age
                }
                return val;
            })

            localStorage.setItem('crud',JSON.stringify(up))
            
            
        return{
            ...state,
            users : up
        }


        default:
            return state;
    }

}