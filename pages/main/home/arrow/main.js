export default function arrow(){
    let style = `
        {
            position:absolute;
            bottom:0%;

            height:20px;
            margin:0px 0px 20px 0px;
            opacity:0;
            transition:opacity 0.5s;
            
            animation:floatingArrow 1s ease 0s infinite alternate;
        }
        @keyframes floatingArrow{
            0%[transform:translateY(0%)]
            100%[transform:translateY(-100%)]
        }
        :responsive{
            height:15px;
        }`

    const arrow = cE("img", style)
    arrow.src = "./assets/elements/arrow.png"

    window.addEventListener("load", async () => {await new Promise(resolve => setTimeout(resolve, 2000)); arrow.style.opacity = 1})
    return(arrow)
}