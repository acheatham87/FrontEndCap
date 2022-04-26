import React, { useEffect, useState } from "react";
import "./LiftDetails.css";
import { getAllLifts } from "../../modules/LiftManager";
import { LiftCard } from "./LiftCard";

export const LiftDetails = () => {

    const [lifts, setLifts] = useState([])

    const getLifts = () => {
        return getAllLifts().then(l => {
            setLifts(l)
        })
    }

    useEffect(() => {
        getLifts();
    }, [])

    return (
        <>
            <div className="lift-details">
                <h2> Lift Details </h2>
                <div className="lift-details-content">
                    {lifts.map(l => <LiftCard
                             key={l.id}
                             lift={l}/>                       
                    )}
                </div>
            </div>           
        </>
    )
}