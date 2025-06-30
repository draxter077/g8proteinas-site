export default function logout(){
    let style = `
        {
            height:29px;
            filter:invert(1);
            transition:transform 0.5s;
            cursor:pointer;
        }
        :hover{
            transform:scale(1.1);
        }`

    const logout = cE("img", style)
    logout.src = "./assets/elements/logout.png"
    return(logout)
}