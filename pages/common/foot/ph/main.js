import img from "./img/main.js"

export default function ph(){
    let style = `
        {
            padding:0px 0px 2.5vh 0px;
            display:flex;
            flex-direction:row;
            align-items:center;
            font-size:17px;
            color:var(--colorWhite);
        }
        :responsive{
            margin:10px 0px 0px 0px;
            padding:0px 0px 10px 0px;
            font-size:12px;
        }`

    const ph = cE("div", style)
    ph.innerHTML = "Desenvolvido por"
    ph.appendChild(img())
    return(ph)
}