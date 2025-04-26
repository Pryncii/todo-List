import { useState } from "react";
import styles from './MainPage.module.css'
import InputItemBox from '../InputItemBox/InputItemBox.jsx'
import InputCategoryBox from "../InputCategoryBox/InputCategoryBox.jsx";

function ListItems(props) {
    
    //Add the states for each item
    const [categories, setCategories] = useState(props.items || []);
    const [items, setItems] = useState(props.items || []);
    const [itemName, setItemName] = useState(props.itemName || "");
    const [itemDesc, setItemDesc] = useState(props.itemDesc || "");
    const [itemDeadline, setItemDeadline] = useState(props.deadline || new Date().toISOString().slice(0, 16));
    const [itemInProgress, setItemInProgress] = useState(false);
    const [itemIsCompleted, setItemIsCompleted] = useState(false);
    const [isInput, setIsInput] = useState(false);
    const [isCategory, setIsCategory] = useState(false);


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

    function handleAddCategory(newCategory){
        if(newCategory != ""){
            setCategories(c => [...c, newCategory]);
            console.log(categories);
        } else {
            alert("New Category Cannot be Empty");
        }
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

    function handleIsInputChange(){
        setIsInput(i => !i);
    }

    function handleIsCategoryChange(){
        setIsCategory(i => !i);
    }




    return (
    <>
        <h2>To-Do-List</h2>
        
        <InputItemBox isInput = {isInput}
            itemName = {itemName} 
            handleItemNameChange = {handleItemNameChange} 
            itemDesc = {itemDesc} 
            handleItemDescChange = {handleItemDescChange} 
            itemDeadline = {itemDeadline} 
            handleItemDeadlineChange = {handleItemDeadlineChange} 
            handleAddItem = {handleAddItem} />

        <InputCategoryBox
            handleAddCategory = {handleAddCategory}
            />

        <div className = {styles.listBox}>
            <button onClick = {handleIsInputChange}>+</button>
            {
            items.map((item, index) => 
                <div className = {styles.itemList} style = {{backgroundcolor: item.inProgress ? "#f5f05d" : item.isCompleted ? "#75c971" : "white"}} key = {index} onClick={(event) => handleComponentChange(index, event)}>
                        {item.name} <br/>
                        {item.deadline}
                </div>)
            }
        </div>
    </>

    )
}

export default ListItems;