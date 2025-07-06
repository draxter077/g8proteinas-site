export default function category(src, t){
    let style = `
        {
            height:40px;
            aspect-ratio:1;
            background:var(--colorBlue);
            border-radius:5px;
            margin:0px 10px;
            padding:5px;
            cursor:pointer;
            transition:filter 0.5s;
        }
        :hover{
            filter:invert(1);
        }
        :responsive{
            height:30px;
        }`

    const category = cE("img", style)
    category.src = src

    category.addEventListener("click", (e) => {e.target.parentElement.parentElement.children[0].value = t;e.target.parentElement.parentElement.children[0].dispatchEvent(new Event("input"))})
    return(category)
}