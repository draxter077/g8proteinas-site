export default function search(){
    let style = `
        {
            font-size:20px;
            width:100%;
            height:fit-content;
            padding:5px 10px;
            border-bottom:1px solid var(--colorBlue);
            color:var(--colorWhite);
        }
        ::placeholder{
            font-style:italic;
        }`

    const search = cE("input", style)
    search.placeholder = "Pesquise em todos os produtos..."
    return(search)
}