import React from 'react';
import "./LiftCard.css"; 

//creates the return for each individual lift being mapped in LiftDetails.js
export const LiftCard = ({ lift }) => {    
    
    return(
        <div className="lift-card">
            <h3 className='lift-card-header'>{lift.name}</h3>
            <div className="lift-card-content">
                <p className="lift-card-description"> {lift.description} </p>
                <div className="video-responsive">
                    <iframe
                    width="853"
                    height="480"
                    src={lift.embed}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                    />
                </div>
            </div>
        </div>
    )
}