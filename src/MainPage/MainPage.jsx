import { useState } from "react";
import styles from './MainPage.module.css'
import InputItemBox from '../InputItemBox/InputItemBox.jsx'
import InputEventBox from "../InputEventBox/InputEventBox.jsx";
import EventBox from "../EventBox/EventBox.jsx"

function ListItems(props) {
    
    //Add the states for each item
    const [events, setEvents] = useState(props.items || []);
    const [eventName, setEventName] = useState (props.eventName || "");
    const [eventDeadline, setEventDeadline] = useState (props.Deadline|| "");
    const [items, setItems] = useState(props.items || []);
    const [itemName, setItemName] = useState(props.itemName || "");
    const [itemDesc, setItemDesc] = useState(props.itemDesc || "");
    const [itemDeadline, setItemDeadline] = useState(props.deadline || new Date().toISOString().slice(0, 16));
    const [itemInProgress, setItemInProgress] = useState(false);
    const [itemIsCompleted, setItemIsCompleted] = useState(false);
    const [isInput, setIsInput] = useState(false);
    const [isEvent, setIsEvent] = useState(false);


    function handleAddItem(){
        //add for each section, the state variables are temporary, to be added to the actual array
        const formatted = new Date(itemDeadline).toLocaleString("en-US", {
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit",
            hour12: true, // Use 12-hour clock (AM/PM)
          });
        const newItem = {name: itemName,
                         desc: itemDesc,
                         deadline: formatted,
                         event: eventName,
                         inProgress: itemInProgress,
                         isCompleted: itemIsCompleted
                        };
        
        setItems(i => [...i, newItem]);
        
        setItemName("");
        setItemDesc("");
        setItemDeadline(new Date().toISOString().slice(0, 16));
        setItemInProgress(false);
        setItemIsCompleted(false);
        setIsInput(false);
    }

    function handleAddEvent(event){

        let formatted;

        if(eventName != ""){

            if(eventDeadline){
                formatted = new Date(eventDeadline).toLocaleString("en-US", {
                    month: "long",
                    day: "numeric",
                    hour: "numeric",
                    minute: "2-digit",
                    hour12: true, // Use 12-hour clock (AM/PM)
                    });
            } else {
                formatted = "No Deadline"
            }

            const newEvent = {
                name: eventName,
                deadline: formatted
            }
            setEvents(c => [...c, newEvent]);
            console.log(events);
            setEventName("");
            setEventDeadline("");
            setIsEvent(false);
        } else {
            alert("Missing Event Name");
        }
    }

    function handleEventNameChange(event){
        setEventName(event.target.value);
    }

    function handleEventDeadlineChange(event){
        setEventDeadline(event.target.value);
    }

    function handleItemNameChange(event){
        setItemName(event.target.value);
    }

    function handleItemDescChange(event){
        setItemDesc(event.target.value);
    }

    function handleComponentChange(index, event){
        
        if(items[index].isCompleted === true || items[index].inProgress === false && items[index].isCompleted === false){
            setItems(i =>
                i.map((item, ind) =>
                  ind === index ? { ...item, inProgress: true, isCompleted: false} : item
                )
              );
            event.target.style.backgroundColor = "#f5f05d";
        } else{
            setItems(i =>
                i.map((item, ind) =>
                  ind === index ? { ...item, inProgress: false, isCompleted: true} : item
                )
              );
            event.target.style.backgroundColor = "#75c971";
        }
        console.log("Item clicked: ", items[index]);
            
    }

    function handleItemDeadlineChange(event){
        setItemDeadline(event.target.value);
    }

    function handleRemoveItem(index){
        setItems(i => i.filter((_, ind) => ind !== index));
    }

    function handleIsInputChange(nameEvent){
        setIsInput(i => !i);
        setEventName(e => nameEvent);
        console.log(eventName);
    }

    function handleIsEventChange(){
        setIsEvent(i => !i);
    }




    return (
    <>
        <div className = {styles.mainPad}>
            <div className = {styles.noteBox}>
                <h2>To-Do-List <button className={styles.categorybutton} onClick = {handleIsEventChange}>+</button></h2> 
                
                <InputItemBox isInput = {isInput}
                    itemName = {itemName} 
                    handleItemNameChange = {handleItemNameChange} 
                    itemDesc = {itemDesc} 
                    handleItemDescChange = {handleItemDescChange} 
                    itemDeadline = {itemDeadline} 
                    handleItemDeadlineChange = {handleItemDeadlineChange} 
                    handleAddItem = {handleAddItem} />

                <InputEventBox
                    eventName = {eventName}
                    handleEventNameChange = {handleEventNameChange}
                    eventDeadline = {eventDeadline}
                    handleEventDeadlineChange = {handleEventDeadlineChange}
                    isEvent={isEvent}
                    handleAddEvent = {handleAddEvent}
                    />

                <EventBox
                    items = {items}
                    events = {events}
                    handleComponentChange = {handleComponentChange}
                    handleIsInputChange = {handleIsInputChange}
                    setEventName={setEventName}
                    />

                
            </div>
        </div>
    </>

    )
}

export default ListItems;