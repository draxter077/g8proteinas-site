export default function status(s){
    const status = cE("div", undefined)
    status.innerHTML = `${s==1 ? "Concluído" : "Em andamento"}`
    return(status)
}