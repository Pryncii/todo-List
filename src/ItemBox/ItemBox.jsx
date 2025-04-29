
import styles from "./ItemBox.module.css"

function ItemBox({items,
                    handleComponentChange,
                    eventName
}){
    return(<>
        { items &&
            items.filter(item => item.event === eventName)
            .map((item, index) => 
            <div className = {styles.itemList} 
            style = {{backgroundcolor: item.inProgress ? "#f5f05d" : item.isCompleted ? "#75c971" : "white"}} 
            key = {index} onClick={(event) => handleComponentChange(index, event)}>
                    {item.name} <br/>
                    {item.deadline}
            </div>)
        }
    </>)
}

export default ItemBox