export async function getOrders() {
    try {
        const res = await fetch(`http://localhost:5000/orders`);
          return  res.json(); 
    } catch (error) {
        console.log(error)
    }
  
}
export async function postOrders(data) {
    try {
        const res = await fetch(`http://localhost:5000/orders`,{
            method:"post",
            credentials:"same-origin",
            headers: {
                'Content-Type': 'application/json'
              },
              body:JSON.stringify(data)

        });
          return  res.json(); 
    } catch (error) {
        console.log(error)
    }
  
}

export async function getRestaurant() {
    try {
        const res = await fetch(`http://localhost:5000/orders/restaurant/list`)

          return  res.json(); 
    } catch (error) {
        console.log(error)
    }
  
}


export async function createRestaurant(data) {
    try {
        const res = await fetch(`http://localhost:5000/orders/restaurant/create`,{
            method:"post",
            credentials:"same-origin",
            headers: {
                'Content-Type': 'application/json'
              },
              body:JSON.stringify(data)

        });
          return  res.json(); 
    } catch (error) {
        console.log(error)
    }
  
}