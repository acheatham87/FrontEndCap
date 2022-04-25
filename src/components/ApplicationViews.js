import React from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { Achievements } from "./goals/Achievements";
import { Home } from "./home/Home"

export const ApplicationViews = ({isAuthenticated, setAuthUser}) => {
    const PrivateOutlet = () => {
        return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
    }
    return (
        <>
        <Routes>
            <Route path="/" element={<PrivateOutlet/>} >
                <Route path='/Home' element={<Home/>} />
                <Route path="/Achievements" element={<Achievements />} />
            </Route>

            <Route path="/login" element={<Login setAuthUser={setAuthUser}/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes>
        </>
    )
}