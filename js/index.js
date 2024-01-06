// this is for the time and date in the header
let t = document.querySelector(".time");
let d = document.querySelector(".date");
let w = document.querySelector(".week");
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

setInterval(() =>{
    let date = new Date();
    let month = date.getMonth() + 1;
    let fdate = date.getDate() + "/" + month + "/" + date.getFullYear();
    t.innerHTML = date.toLocaleTimeString();
    d.innerHTML = fdate;
    // d.innerHTML = date.toLocaleDateString();
    w.innerHTML = weekday[date.getDay()];


})


// this is for the pomodoro timer

// const focus_min = 25;
// const brek_min = 5;
// let focus_sec = focus_min*60;
// let break_sec = brek_min*60;
// let timer = document.querySelector(".timer");


// document.querySelector(".pause").addEventListener("click",function(){
//     alert("play/pause");
// })
// document.querySelector(".reset").addEventListener("click",function(){
//     alert("reset");
// })
// timer.innerText = focus_min;

// setInterval(updateTime, 1000);

// function updateTime() {

//     const minutes = math.floor(focus_sec/60);
//     const seconds = focus_sec%60;
//     timer.innerHTML = minutes + ":" + seconds;
//     focus_sec--;
// }

// function test() {
//     alert("pls work");
// }
