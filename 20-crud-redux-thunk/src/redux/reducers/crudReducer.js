let initialState = {
    users : [],
    single:null
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
            
            case 'edit':
                let single = state.users.find((val)=>{
                return val.id == action.payload.id
            })
            
            return {
                ...state,
                single : single
            }


            case 'update':
                const {id,name,age} = action.payload;

                let up = state.users.map((val)=>{
                    if(val.id == id){
                        return {
                            ...val,
                            name : name,
                            age : age
                        }
                    }
                    return val
                })
                
            return{
                ...state,
                users : up
            };
            
            

        default:
            return state;

    }

}