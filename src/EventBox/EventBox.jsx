import {useState} from "react"
import styles from "./EventBox.module.css"
import ListBox from "../ItemBox/ItemBox"

function EventBox({
    handleIsInputChange,
    items,
    events,
    handleComponentChange,
}
){

    return(
        <>
        { events &&
            events.map((event, index) =>  
                <div className = {styles.listBox} key = {index}>
                    <div className = {styles.listBoxLabel}>
                    {event.name} <button className= {styles.categorybutton} onClick = {() => handleIsInputChange(event.name)}>+</button> <br/>
                    {event.deadline}
                    </div> 
                    <ListBox 
                        items = {items}
                        handleComponentChange = {handleComponentChange}
                        eventName={event.name} />
                </div>) 
        }
            </>

    )
}

export default EventBox;