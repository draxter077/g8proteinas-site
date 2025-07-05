export default function showMore(){
    let style = `
        {
            height:10px;
            margin:0px 10px 0px 0px;
            cursor:pointer;
            transition:transform 0.5s;
        }
        :responsive{
            margin:10px 10px 10px 0px;
        }`

    const showMore = cE("img", style)
    showMore.src = "./assets/elements/arrow.png"

    showMore.addEventListener(
        "click",
        function a(e){
            let moreInfo = e.target.parentElement.parentElement.children[1]
            if(e.target.style.transform == "rotate(180deg)"){
                e.target.style.transform = "rotate(0deg)"
                moreInfo.style.maxHeight = "0px"
            }
            else{
                e.target.style.transform = "rotate(180deg)"
                moreInfo.style.maxHeight = "1000px"
            }
        }
    )
    return(showMore)
}