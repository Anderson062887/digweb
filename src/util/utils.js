export function NameValidator(name) {
    let rx = /^[A-Z][a-z{2,}]*/;
    console.log(rx.test(name))
}

export function EmailValidate(email){
    let rx = /^\w*.?\w*?@\w*.com$/;
      return rx.test(email)
   
 }
 export function checkpassword(pas) {
     let rx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
     return rx.test(pas)
 }
 export function ConfirmedPassword(pas,conf) {
 let res =   pas.match(conf)
 console.log(res)
    return res;
}