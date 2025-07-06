export default function add(){
    let style = `
        {
            height:20px;
            background:var(--colorBlue);
            padding:2px 5px;
            border-radius:5px;
            filter:invert(1);
            cursor:pointer;
        }`

    const add = cE("img", style)
    add.src = "./assets/elements/check.png"
    return(add)
}