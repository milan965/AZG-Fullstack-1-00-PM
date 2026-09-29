export const ADD_USER = (user) => {
    return{
        type : 'adduser',
        payload : user
    }
    
}

export const DELETE_USER = (id) => {
    return{
        type:'deleteuser',
        payload : id
    }
}