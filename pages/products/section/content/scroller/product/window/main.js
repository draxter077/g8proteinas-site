export default function window(t, src, p){
    let style = `
        {
            position:fixed;
            top:10%;
            left:10%;

            width:80%;
            height:80%;
            background:var(--colorWhite);
            border-radius:5px;
            box-shadow:0px 0px 5px 0px var(--colorBlue);
        }`

    const window = cE("div", style)
    window.addEventListener(
        "click",
        function a(e){
            document.getElementById("root").removeChild(e.target)
        }
    )
    return(window)
}