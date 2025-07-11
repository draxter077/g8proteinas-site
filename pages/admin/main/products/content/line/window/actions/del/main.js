export default function del(p){
    let style = `
        {
            font-size:20px;
            color:var(--colorWhite);
            background:red;
            padding:5px 10px;
            border-radius:5px;
            margin:0px 0px 0px 5px;
            width:fit-content;
            cursor:pointer;
            transition:background 0.5s;
        }
        :hover{
            background:var(--colorBlack);
        }
        :responsive{
            font-size:16px;
        }`

    const del = cE("div", style)
    del.innerHTML = "Excluir"

    del.addEventListener("click", () => console.log(p))
    return(del)
}