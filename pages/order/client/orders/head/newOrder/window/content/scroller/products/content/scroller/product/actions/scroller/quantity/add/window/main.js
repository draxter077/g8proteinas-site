export default function window(t){
    let style = `
        {
            position:fixed;
            top:5%;
            left:40%;

            font-size:15px;
            color:var(--colorBlack);
            background:var(--colorWhite);
            padding:5px 10px;
            border-radius:5px;
            box-shadow:0px 0px 5px 0px var(--colorBlack);
            transform:translateY(-200%);
            transition:transform 0.5s;
            z-index:4;
        }
        :responsive{
            left:30%;
        }`

    const window = cE("div", style)
    window.innerHTML = t
    return(window)
}