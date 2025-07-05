export default function search(){
    let style = `
        {
            font-size:20px;
            padding:2px 5px;
            width:50%;
            color:var(--colorWhite);
            border-bottom:1px solid var(--colorBlue);
        }
        ::placeholder{
            font-style:italic;
        }
        :responsive{
            width:100%;
            font-size:17px;
            margin:10px 0px 0px 0px;
            order:2;
        }`

    const search = cE("input", style)
    search.placeholder = "Pesquise em pedidos (data, hora, ID, items)"
    return(search)
}