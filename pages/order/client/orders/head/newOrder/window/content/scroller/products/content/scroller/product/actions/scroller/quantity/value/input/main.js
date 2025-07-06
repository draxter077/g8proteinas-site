export default function input(){
    let style = `
        {
            font-size:15px;
            padding:2px 5px;
            border-bottom:1px solid var(--colorBlue);
            width:80%;
        }`

    const input = cE("input", style)
    input.type = "number"
    return(input)
}