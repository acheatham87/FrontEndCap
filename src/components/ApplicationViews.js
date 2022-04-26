import React from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { Achievements } from "./goals/Achievements";
import { CreateGoal } from "./goals/CreateGoal";
import { Home } from "./home/Home"
import { LiftDetails } from "./lifts/LiftDetails";

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
                <Route path="/LiftDetails" element={<LiftDetails />} />
                <Route path="/NewGoals" element={<CreateGoal />} />
            </Route>

            <Route path="/login" element={<Login setAuthUser={setAuthUser}/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes>
        </>
    )
}