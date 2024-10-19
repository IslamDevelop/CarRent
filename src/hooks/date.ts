

export const date = () => {
    const year = new Date().getFullYear()
    const mounth = new Date().getMonth() + 1
    const day = new Date().getDate()
    const hours = new Date().getHours()
    
    let minute:number | string = new Date().getMinutes()
    if(minute < 10) {
        minute = `0${minute}`
    }
   
 const time = day + "." + mounth + "." + year + " " + hours + ':' + minute

 return time
}
