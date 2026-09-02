import React, { useEffect } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom';

const PrivateRoute = () => {
    const navigate = useNavigate();

    let userlogin = localStorage.getItem('userlogin');

    if(!userlogin){
        return <Navigate to={`/`}/>
    }else{
        return <Outlet/>
    }
    
    
    

    // useEffect(()=>{
    //     if(userlogin){
    //         return <Outlet/>
    //     }

    //     return navigate('/');
    // })
}

export default PrivateRoute
