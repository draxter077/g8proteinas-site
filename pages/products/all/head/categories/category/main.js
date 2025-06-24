export default function category(src, t){
    let style = `
        {
            height:50px;
            aspect-ratio:1;
            background:var(--colorBlue);
            border-radius:5px;
            margin:0px 10px;
            padding:5px;
            cursor:pointer;
            transition:background 0.5s;
        }
        :hover{
            background:var(--colorWhite);
        }`

    const category = cE("img", style)
    category.src = src
    return(category)
}