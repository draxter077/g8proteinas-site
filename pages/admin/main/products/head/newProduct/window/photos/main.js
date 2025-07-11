export default function photos(){
    let style = `
        {
            font-size:18px;
            color:var(--colorBlack);
        }
        :responsive{
            font-size:14px;
        }`

    const photos = cE("div", style)
    photos.innerHTML = "Envie as fotos para o email contato@ph.net.br"
    return(photos)
}