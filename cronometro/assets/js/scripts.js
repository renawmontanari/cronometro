let sec=0
let min=0
let hr=0

let interval

const watchTimer = document.querySelector("#watch");

function twoDigits(digit){
    if(digit<10){
        return('0'+digit)
    }else{
        return(digit)
    }
}

function start(){
    watch()
    interval= setInterval(watch,10)
}

function pause(){
    clearInterval(interval)
}

function stop(){
    clearInterval(interval)
    sec=0
    min=0
    window.alert("The stopwatch stopped at: "+document.getElementById('watch').innerText)
    watchTimer.innerText='00:00:00'
}

function watch(){
    sec++
    if(sec==60){
        min++
        sec=0
        if(min==60){
            min=0
            hr++
        }
    }
    watchTimer.innerText=twoDigits(hr)+':'+twoDigits(min)+':'+twoDigits(sec);
}
