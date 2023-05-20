export const creatUserData = ()=>{
    sessionStorage.setItem('defaulScore','10');
    const userScore = sessionStorage.getItem('defaulScore')
    console.log(userScore)
}