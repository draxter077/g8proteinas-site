export default function textarea(){
    let style = `
        {
            width:50%;
            font-size:12px;
            background:var(--colorWhite);
            color:var(--colorBlack);
            border-radius:5px;
            padding:2px 5px;
        }`
    
    const textarea = cE("textarea", style)
    textarea.rows = 3
    textarea.placeholder = "Observações"
    return(textarea)
}