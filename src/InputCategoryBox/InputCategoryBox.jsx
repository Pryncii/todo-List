import {useState} from 'react'
import styles from './InputCategoryBox.module.css'


function InputCategoryBox({
    isCategory,
    handleAddCategory
}){

    const [newCategory, setNewCategory] = useState("");

    function handleNewCategory(event){
        setNewCategory(event.target.value);
    }

    return(
        <>
            { isCategory && 
                <div className = {styles.categoryBox}>
                    <h2>Add Category</h2>
                    <input type = "text" value = {newCategory} onChange={handleNewCategory} />
                    <button onClick = {() => handleAddCategory(newCategory)}>Add Category</button>
                </div>
            }   
        </>
    )
}

export default InputCategoryBox;