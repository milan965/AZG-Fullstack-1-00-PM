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


export const EDIT_USER = (id) => {    
    return{
        type:'edituser',
        payload : id
    }
}


export const UPDATE_USER = (record) => {    
    return{
        type:'updateuser',
        payload : record
    }
}