import { useEffect, useState } from 'react';
import {BrowserRouter as useNavigate } from 'react-router-dom';
import Header from '../../Components/debug/header';

const Dashboard=()=>{
    const [auth, setAuth] = useState(null);
    let navigate = useNavigate();
    useEffect(()=>{
        var auth = localStorage.getItem('email'); 
        setAuth(auth);
      },
      [])
    if(auth===null){
        navigate(`/dashboard`);
    }
    return(
        <>
            <Header/>
            <div>
                Debug dashboard
            </div>
        </>

    )
}

export default Dashboard;