import { useState } from "react";
import styles from './ListItems.module.css'

function ListItems(props) {
    
    //Add the states for each item
    const [items, setItems] = useState(props.items || []);
    const [itemName, setItemName] = useState(props.itemName || "");
    const [itemDesc, setItemDesc] = useState(props.itemDesc || "");
    const [itemDeadline, setItemDeadline] = useState(props.deadline || new Date().toISOString().slice(0, 16));
    const [itemInProgress, setItemInProgress] = useState(false);
    const [itemIsCompleted, setItemIsCompleted] = useState(false);

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
                         inProgress: itemInProgress,
                         isCompleted: itemIsCompleted
                        };
        
        setItems(i => [...i, newItem]);
        setItemName("");
        setItemDesc("");
        setItemDeadline(new Date().toISOString().slice(0, 16));
        setItemInProgress(false);
        setItemIsCompleted(false);
    }

    function handleRemoveItem(index){
        setItems(i => i.filter((_, ind) => ind !== index));
    }

    function handleItemNameChange(event){
        setItemName(event.target.value);
    }

    function handleItemDescChange(event){
        setItemDesc(event.target.value);
    }

    function handleItemDeadlineChange(event){
        setItemDeadline(event.target.value);
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

  


    return (
    <>
        <h2>To-Do-List</h2>
        <ul>
            {
            items.map((item, index) => 
                <div className = {styles.itemList} style = {{backgroundcolor: item.inProgress ? "#f5f05d" : item.isCompleted ? "#75c971" : "white"}} key = {index} onClick={(event) => handleComponentChange(index, event)}>
                        {item.name} <br/>
                        {item.deadline}
                </div>)
            }
        </ul>
        <input type = "text" value = {itemName} onChange = {handleItemNameChange} placeholder = "Item Name"/>  
        <input type = "text" value = {itemDesc} onChange = {handleItemDescChange} placeholder = "Item Description"/>
        <input type = "datetime-local" value = {itemDeadline} onChange = {handleItemDeadlineChange} placeholder = "Item Deadline"/>
        <button onClick = {handleAddItem}>Add Item</button>
    </>

    )
}

export default ListItems;