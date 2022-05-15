import React, { useEffect, useState } from "react";
import "./LiftDetails.css";
import { getAllLifts } from "../../modules/LiftManager";
import { LiftCard } from "./LiftCard";

export const LiftDetails = () => {

    //sets a useState for lifts
    const [lifts, setLifts] = useState([])

    //uses getAllLifts to return all lifts in the databes.  Then takes the returned data and updates the state of lifts
    const getLifts = () => {
        return getAllLifts().then(l => {
            setLifts(l)
        })
    }

    useEffect(() => {
        getLifts();
    }, [])

    return (
        // JSX that maps the returned lifts onto idividual lift "cards" and dispalys them on the DOM
        <>
        <div className="liftDetails-container">
            <div className="liftDetails-title">
                <h2> Lift Details </h2>
            </div>
            <div className="liftDetails-content">
                {lifts.map(l => <LiftCard
                            key={l.id}
                            lift={l}/>                       
                )}
            </div>    
        </div>       
        </>
    )
}