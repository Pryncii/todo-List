import {useState} from "react"
import styles from "./EventBox.module.css"

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
                        { items &&
                            items.filter(item => item.event === event.name)
                            .map((item, index) => 
                            <div className = {styles.itemList} 
                            style = {{backgroundcolor: item.inProgress ? "#f5f05d" : item.isCompleted ? "#75c971" : "white"}} 
                            key = {index} onClick={(event) => handleComponentChange(index, event)}>
                                    {item.name} <br/>
                                    {item.deadline}
                            </div>)
                        }
                </div>) 
        }
            </>

    )
}

export default EventBox;