import React from "react";
import { Link } from 'react-router-dom';

const Hello=()=>{
    const REQUIRURL= "";
    return (
        <div>
            <h2>로그인에 성공하셨습니다.</h2>
            <h2><Link to="/Oauth">Oauth Page</Link></h2>
            {/* <h2><Link to="/Admin">Admin Page</Link></h2>
            <h2><Link to="/Users">Users Page</Link></h2> */}
            <h2><a href="http://localhost:8080/admin">ADMIN</a></h2>
            <h2><a href="http://localhost:8080/users">USERS</a></h2>
        
        </div>
    )
}

export default Hello;