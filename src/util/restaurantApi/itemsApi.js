const itemUrl = `http://localhost:5000/items`

export async function GetAllItems() {
    try {
        const data =  await fetch(`${itemUrl}/all`)
        const items = await data.json();
        console.log(items)
        return items;
        
    } catch (error) {
        console.log("error fetching all items")
        console.log(error)
    }
}

export async function CreateNewItem(newItem) {
   
    try {
        const data =  await fetch(`${itemUrl}/create`,{
            method:"post",
            credentials:"same-origin",
            headers: {
                'Content-Type': 'application/json'
              },
            body:JSON.stringify(newItem)
        })
        const items = await data.json();
       
        return items;
        
    } catch (error) {
        console.log("error posting  items")
        console.log(error)
    }
}