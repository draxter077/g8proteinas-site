import button from "./button/main.js"

export default function head(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:flex-end;
            width:100%;
            padding:0px 10px;
            background:var(--colorBlue);
        }`

    const head = cE("div", style)
    head.appendChild(button())
    return(head)
}