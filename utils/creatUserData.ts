export const creatUserData = ()=>{
    sessionStorage.setItem('defaultScore','10');
    const userScore = sessionStorage.getItem('defaulScore')
    console.log(userScore)
}