
const API = "http://localhost:8000/users"

export const ADD_USER = (user) => {
    return async(dispatch) => {
        let result = await fetch(`${API}`,{
            method : "POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(user)
        })
        let res = await result.json()
        dispatch({
            type : 'add',
            payload:res
        })
    }
}


export const VIEW_USER = () => {
    return async(dispatch) => {
        let result = await fetch(`${API}`,{
            method : "GET",
            headers:{
                'Content-Type':'application/json'
            },
        })
        let res = await result.json()
        dispatch({
            type : 'view',
            payload:res
        })
    }
}