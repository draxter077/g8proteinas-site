export default function arrow(){
    let style = `
        {
            position:absolute;
            bottom:0%;

            height:20px;
            margin:0px 0px 20px 0px;
            animation:floatingArrow 1s ease 0s infinite alternate;
        }
        @keyframes floatingArrow{
            0%[transform:translateY(0%)]
            100%[transform:translateY(-50%)]
        }
        :responsive{
            height:15px;
        }`

    const arrow = cE("img", style)
    arrow.src = "./assets/elements/arrow.png"
    return(arrow)
}