export default function line(p){
    let style = `
        {
            font-size:22px;
            color:red;
        }`

    const line = cE("div", style)
    line.innerHTML = p.title
    return(line)
}