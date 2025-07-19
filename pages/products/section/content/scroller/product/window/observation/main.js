export default function observation(obs){
    let style = `
        {
            font-size:16px;
            color:var(--colorBlack);
            width:80%;
            max-height:30%;
            text-align:center;
            text-wrap:wrap;
        }
        :responsive{
            font-size:14px;
        }`

    const observation = cE("div", style)
    observation.innerHTML = obs
    return(observation)
}