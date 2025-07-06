export default function button(t){
    let style = `
        {
            font-size:18px;
            width:50%;
            padding:5px 10px;
            color:var(--colorBlack);
            transition:all 0.5s;
            text-align:center;
            cursor:pointer;
        }
        :responsive{
            font-size:12px;
        }`

    const button = cE("div", style)
    button.innerHTML = t

    button.addEventListener(
        "click",
        function a(e){
            e.target.style.background = "var(--colorOrange)"
            e.target.style.color = "var(--colorWhite)"

            let k
            let scroller = e.target.parentElement.parentElement.children[2].children[0]
            if(e.target.innerHTML == "Produtos"){
                k = 1
                scroller.style.transform = "translateX(0%)"
            }
            else{
                k = 0
                scroller.style.transform = "translateX(-50%)"
            }
            e.target.parentElement.children[k].style.background = "none"
            e.target.parentElement.children[k].style.color = "var(--colorBlack)"
        }
    )
    return(button)
}