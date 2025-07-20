export default function value(v, t){
    let style = `
        {
            font-size:20px;
            color:var(--colorWhite);
            ${t == "Título" || t == "Observação" ? "width:40vw;" : "width:150px;"}
        }
        ::placeholder{
            font-style:italic;
            opacity:0.6;
            color:var(--colorWhite);
        }
        :responsive{
            font-size:15px;
            ${t == "Título" || t == "Observação" ? "width:70vw;" : "width:100px;"}
        }`

    let elem = "input"
    if(t == "Título" || t == "Observação"){elem ="textarea"}
    const value = cE(elem, style)
    value.rows = "1"
    value.value = v
    if(t == "Preço da unidade" || t == "Lucro por unidade"){value.type = "number"}
    else if(t == "ID"){value.disabled = true}
    return(value)
}