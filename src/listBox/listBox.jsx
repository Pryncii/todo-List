
import styles from "./listBox.module.css"

function listBox({items}){
    return(<>
        { items &&
            items.map((item, index) => 
            <div className = {styles.itemList} 
            style = {{backgroundcolor: item.inProgress ? "#f5f05d" : item.isCompleted ? "#75c971" : "white"}} 
            key = {index} onClick={(event) => handleComponentChange(index, event)}>
                    {item.name} <br/>
                    {item.deadline}
            </div>)
        }
    </>)
}

export default listBox