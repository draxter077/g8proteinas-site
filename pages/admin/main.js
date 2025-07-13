import login from "./login/main.js"
import main from "./main/main.js"

export default function admin(log){
    let style = `
        {
            width:100%;
            opacity:0;
            transition:opacity 0.5s;
        }`

    const admin = cE("div", style)
    if(log == undefined){
        admin.appendChild(login())
    }
    else{
        admin.appendChild(main(log))
        admin.style.opacity = 1
    }

    window.addEventListener("load", () => admin.style.opacity = 1)
    return(admin)
}