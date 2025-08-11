export default function value(v, t){
    let style = `
        {
            font-size:20px;
            color:var(--colorWhite);
            width:150px;
        }
        ::placeholder{
            font-style:italic;
            opacity:0.6;
            color:var(--colorWhite);
        }
        :responsive{
            font-size:15px;
            width:100px;
        }`

    const value = cE("input", style)
    value.value = v
    if(t != "Margem de lucro"){value.disabled = true}
    return(value)
}