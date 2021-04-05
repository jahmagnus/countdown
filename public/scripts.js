
//timer function for countdown1

function timer(){
//set the date counting down to
const countdownDate = new Date("April 01, 2022 00:00:00").getTime()


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

    //console.log(days, hours, mins, secs)

    document.querySelector('.days').innerHTML = days + "<br>" + "<span class = inset>Days<span>"
    document.querySelector('.hours').innerHTML = hours + "<br>" + "<span class = inset>Hours<span>"
    document.querySelector('.minutes').innerHTML = mins + "<br>" + "<span class = inset>Minutes<span>" 
    document.querySelector('.seconds').innerHTML = secs + "<br>" + "<span class = inset>Seconds<span>" 

    

})

}


timer()
