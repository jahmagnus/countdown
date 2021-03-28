


function timer(){
//set the date counting down to
const countdownDate = new Date("May 01, 2022 00:00:00").getTime()


//update count every second
let x = setInterval(function(){

    //get today's date and time
    let now = new Date().getTime()

    //get a distance value between now and the countdown date
    let distance = countdownDate - now

    //calculations for days, hours, minutes, seconds
    let days = Math.floor(distance/(1000*60*60*24))
    let hours = Math.floor((distance%(1000*60*60*24)) / (1000 * 60 * 60))
    let mins = Math.floor((distance%(1000*60*60)) / (1000 * 60))
    let secs = Math.floor((distance%(1000*60)) / 1000)

    console.log(days, hours, mins, secs)

    document.querySelector('.times').innerHTML =  days + " : " + hours + " : " + mins + " : " + secs 

    

})

}


timer()
