export default function logo(){
    let style = `
        {
            position:absolute;
            width:150px;
            height:150px;
            animation:goDown 4s linear 0s infinite alternate, goRight 2.73s linear 0s infinite alternate;
        }
        :responsive{
            animation:goDown 2s linear 0s infinite alternate, goRight 1.73s linear 0s infinite alternate;   
        }
        @keyframes goDown{
            0%[top:0%;]
            100%[top:calc(100% - 150px);]
        }
        @keyframes goRight{
            0%[left:0%]
            100%[left:calc(100% - 150px);]
        }`

    const logo = cE("img", style)
    logo.src = "./assets/brand/logo.png"
    return(logo)
}