let initialState = {
    users : [
        {id:1,name:'ajay',age:23},
        {id:2,name:'vjay',age:24},
        {id:3,name:'kishan',age:25},
    ]
}
export const crudReducer = (state=initialState,action) => {

    switch(action.type){
        
        default:
            return state;
    }

}