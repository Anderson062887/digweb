
export const LogIn = async(data)=>{
    try {
        const user = await fetch(`http://localhost:5000/user/login`,{
            method:"POST",
            credentials:"same-origin",
            headers:{
                'Content-Type': 'application/json',
            
             
            },
            body:JSON.stringify(data),
        })
        return user.json();
    } catch (error) {
        console.log(error);
    }

}
export const RegisterUser = async(data)=>{
    try {
        const user = await fetch(`http://localhost:5000/user/register`,{
            method:"POST",
            credentials:"same-origin",
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(data),
        })
        return user.json();
    } catch (error) {
        console.log(error);
    }

}