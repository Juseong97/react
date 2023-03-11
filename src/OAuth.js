import React from "react";
import axios from "axios";
import { Link } from 'react-router-dom';



const  OAuth=()=>{
    const YOUR_REST_API_KEY="1cfc5abbc1e0dd24af7409e5284da67a"
    const YOUR_LOGOUT_REDIRECT_URI="http://localhost:3000/"	
    const KAKAO_LOGOUT=`https://kauth.kakao.com/oauth/logout?client_id=${YOUR_REST_API_KEY}&logout_redirect_uri=${YOUR_LOGOUT_REDIRECT_URI}`
    const KAKAO_AUTH_URL ="http://localhost:8080/oauth2/authorization/kakao"
    const AUTH_LOGIN="http://localhost:8080/login"
    const AUTH_LOGOUT="http://localhost:8080/logout"
    return (
        <div>
            <h1><a href={KAKAO_AUTH_URL}>카카오 로그인 하기</a></h1>
            <h1><a href={KAKAO_LOGOUT}>카카오 로그아웃 하기</a></h1>
            <h1><a href={AUTH_LOGIN}>Spring Security Login</a></h1>
            <h1><a href={AUTH_LOGOUT}>Spring Security Logout</a></h1>
            <h2><Link to="/">Hello Page</Link></h2>
        </div>
    )
    axios.get("http://localhost:8080/",{
    }).then(res=>{
        console.log(res.data)
    })

}

export default OAuth;