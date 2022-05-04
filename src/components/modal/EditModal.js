import React, { useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { EditGoal } from "../goals/EditGoal";
import "./EditModal.css"

//function accepting props from its parent, CurrentGoal.js, and its great grandparent, Home.js.  Sets up the modal that pops up upon clicking the edit button on Home
export const EditModal = (props) => {

    var ReactDOM = require('react-dom')

    //function that closes the modal upon pressing the escape key
    const closeOnEscapeKeyDown = (e) => {
        if ((e.charCode || e.keyCode) === 27) {
            props.onClose()
        }
    }

    useEffect(() => {
        document.body.addEventListener('keydown' , closeOnEscapeKeyDown)
        return function cleanup() {
            document.body.removeEventListener('keydown', closeOnEscapeKeyDown)
        }
    }, [])

    //JSX of the modal to be displayed on the DOM
    return ReactDOM.createPortal(
        <CSSTransition
        in={props.show}
        unmountOnExit
        timeout={{enter: 0, exit: 300}}>
            <div className={`edit-modal ${props.show ?'show' : ''}`} onClick={props.onClose}>
                <div className="edit-modal-content" onClick={e => e.stopPropagation()}>
                    <div className="edit-modal-header">
                        <h4 className="edit-modal-title">Edit Your Goals</h4>
                        <div className="edit-modal-body">
                            <EditGoal props={props}/>
                        </div>
                    </div>
                </div>
            </div>
        </CSSTransition>, document.getElementById('root')
    )
}