import { useState } from "react";
import styles from './InputItemBox.module.css'


function InputItemBox({
    isInput,
    itemName,
    handleItemNameChange,
    itemDesc,
    handleItemDescChange,
    itemDeadline,
    handleItemDeadlineChange,
    handleAddItem
}){

    return(
        <>
        { 
        isInput &&
            <div className = {styles.inputBox}>
                <h2>Input Task</h2>
                <div className = {styles.inputField}>
                    Task Name: 
                    <input type = "text" value = {itemName} onChange = {handleItemNameChange} placeholder = "Item Name"/>  
                </div>
                <div className = {styles.inputField}>
                    Task Description:
                    <textarea value = {itemDesc} onChange = {handleItemDescChange} placeholder = "Item Description"/>
                </div>
                <div className = {styles.inputField}>
                    Deadline:
                    <input type = "datetime-local" value = {itemDeadline} onChange = {handleItemDeadlineChange} placeholder = "Item Deadline"/>
                </div>
                    <br/>
                    <button onClick = {handleAddItem}>Add Item</button>
            </div>
        }
        </>
    )
}

export default InputItemBox;