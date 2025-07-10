export default function value(v, t){
    let style = `
        {
            font-size:22px;
            color:var(--colorWhite);
            ${t == "Título" ? "width:50vw;" : "width:150px;"}
        }
        :responsive{
            font-size:15px;
            ${t == "Título" ? "width:80vw;" : "width:100px;"}
        }`

    let elem = "input"
    if(t == "Título"){elem ="textarea"}
    const value = cE(elem, style)
    value.value = v
    value.rows = "1"
    if(t == "ID"){value.disabled = true}
    return(value)
}