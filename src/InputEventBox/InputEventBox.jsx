import {useState} from 'react'
import styles from './InputEventBox.module.css'


function InputEventBox({
    eventName,
    handleEventNameChange,
    eventDeadline,
    handleEventDeadlineChange,
    isEvent,
    handleAddEvent
}){

    return(
        <>
            { isEvent && 
                <div className = {styles.eventBox}>
                    <h2>Add Event</h2>
                    <div className = {styles.inputField}>
                    Event Name:
                        <input type = "text" value = {eventName} onChange={handleEventNameChange} />
                    </div>
                    <br/>
                    <div className = {styles.inputField}>
                    Event Deadline:
                        <input type = "date" value = {eventDeadline} onChange = {handleEventDeadlineChange} />
                    </div>
                    <br/>
                    <button onClick = {handleAddEvent}>Add Event</button>
                </div>
            }   
        </>
    )
}

export default InputEventBox;