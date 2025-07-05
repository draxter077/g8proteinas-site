export default function integer(i){
    let style = `
        {
            font-size:28px;
            color:var(--colorBlack);
        }
        :responsive{
            font-size:22px;
        }`

    const integer = cE("div", style)
    integer.innerHTML = i
    return(integer)
}