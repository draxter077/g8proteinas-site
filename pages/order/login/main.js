import logo from "./logo/main.js"
import forms from "./forms/main.js"
import buttons from "./buttons/main.js"

export default function login(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            width:100%;
            height:100svh;
        }`

    const login = cE("div", style)
    //construct(
    //    {
    //        page:"order", 
    //        data:{
    //            id:123
    //        }
    //    }
    //)
    login.appendChild(logo())
    login.appendChild(forms())
    login.appendChild(buttons())
    return(login)
}