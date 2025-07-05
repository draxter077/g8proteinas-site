export default function integer(i){
    let style = `
        {
            font-size:35px;
            color:var(--colorBlack);
        }
        :responsive{
            font-size:30px;
        }`

    const integer = cE("div", style)
    integer.innerHTML = i
    return(integer)
}