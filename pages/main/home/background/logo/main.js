export default function logo(){
    let style = `
        {
            height:50%;
            transform:translateY(500%);
            transition:transform 0.5s;
        }
        :responsive{
            height:fit-content;
            width:50%;
        }`

    const logo = cE("img", style)
    logo.src = "./assets/brand/logo.png"
    window.addEventListener("load", async () => {await new Promise(resolve => setTimeout(resolve, 100)); logo.style.transform = "translateY(0%)"})
    return(logo)
}