import login from "./login/main.js"
import main from "./main/main.js"

export default function supplier(log){
    let style = `
        {
            width:100%;
            opacity:0;
            transition:opacity 0.5s;
        }`

    const supplier = cE("div", style)
    if(log == undefined){
        supplier.appendChild(login())
    }
    else{
        axios.defaults.headers.common["userAuth"] = log.user.id
        supplier.appendChild(main(log))
        supplier.style.opacity = 1
    }

    window.addEventListener("load", () => supplier.style.opacity = 1)
    return(supplier)
}