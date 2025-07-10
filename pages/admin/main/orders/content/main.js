import line from "./line/main.js"

export default function content(os){
    let style = `
        {
            display:flex;
            flex-direction:column;
            width:100%;
            height:35svh;
            overflow-y:scroll;
        }`

    const content = cE("div", style)
    os = [...os, ...os, ...os]
    for(let i = 0; i < os.length; i++){content.appendChild(line(os[i]))}
    return(content)
}