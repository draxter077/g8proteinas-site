export default function input(v){
    let style = `
        {
            font-size:20px;
            width:100%;
            padding:0px 5px;
            border-bottom:1px solid var(--colorOrange);
        }`

    const input = cE("input", style)
    input.value = v
    return(input)
}