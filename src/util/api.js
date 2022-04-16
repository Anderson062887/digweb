

const url = `http://localhost:5000/microorganisms/`;

 export function FecthData(params) {
    
    return fetch(`${url}${params}`)
          .then(data => data.json())
          .catch(e => console.log(e))
}
// http://localhost:5000/
export async function getFileName() {
    try {
        const res = await fetch(`http://localhost:5000/files`);
          return  res.json(); 
    } catch (error) {
        console.log(error)
    }
  
}
export async function getOrderFile(filename) {
    try {
        const res = await fetch(`http://localhost:5000/files/${filename}`);
          return  res.json(); 
    } catch (error) {
        console.log(error)
    }
  
}

export async function sendData(data) {
   
    const res =  await fetch(`http://localhost:5000/create/batch`,{
        method: 'POST',
        credentials:"same-origin",
        headers: {
            'Content-Type': 'application/json'
          },
          body:JSON.stringify({data})
    })

    return res.json()
}

export async function CreateItem(data) {
    
   
    const res =  await fetch(`http://localhost:5000/items/create`,{
        method: 'POST',
        credentials:"same-origin",
        headers: {
            'Content-Type': 'application/json'
          },
          body:JSON.stringify({data})
    })

    return res.json()
}
export async function getWalkInData() {
      
    try {
        const res =  await fetch(`http://localhost:5000/items`)
        return res.json()
    } catch (error) {
      console.log(error.message)
    }
}

export async function deleteItem(loc) {
      
    try {
        const res =  await fetch(`http://localhost:5000/items/delete/${loc}`)
        return res.json()
    } catch (error) {
      console.log(error.message)
    }
}
export async function editItem(loc,num) {
      
    try {
        const res =  await fetch(`http://localhost:5000/items/edit/${loc}/${num}`)
        return res.json()
    } catch (error) {
      console.log(error.message)
    }
}



