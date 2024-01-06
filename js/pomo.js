const timerElement = document.getElementById("timer");
const startButton = document.getElementById("start");
const resetButton = document.getElementById("reset");
const stopButton = document.getElementById("stop");
let header = document.querySelector(".top");


const focus = 25;
const brktime = 5;

    let time = focus * 60;
    let brk = brktime * 60;
    let timer = time;
    let cycles = 0;
    let flag = 0;
    let interval;
    updateTime();

    function updateTime() {
      let minutes = Math.floor(timer / 60);
      let seconds = timer % 60;
      timerElement.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    }

    function toggle(x) {
      if (x===0){
        startButton.classList.add("hidden")
        stopButton.classList.remove("hidden")
      }
      else {
        startButton.classList.remove("hidden")
        stopButton.classList.add("hidden")
      }
    }

    function togglefocus() {
      if (flag===0) {
        header.innerHTML = "break";
        timer = brk;
        updateTime();
        cycles++
        document.querySelector(".cycles").innerHTML = "cycles:"+cycles;
        flag = 1;
      }
      else {
        header.innerHTML = "focus";
        timer = time;
        updateTime();
        flag = 0;
      }
    }

    function startTimer() {
      interval = setInterval(() => {
        if (timer > 0) {
          timer--;
          toggle(0);
          updateTime();
        } else {
          clearInterval(interval);
          togglefocus();
          startTimer();
          // toggle(1);
        }
      }, 1000);
    }


    function resetTimer() {
        clearInterval(interval);
        timer = focus * 60;
        updateTime();
        header.innerHTML = "focus";
        cycles = 0;
        document.querySelector(".cycles").innerHTML = "cycles:"+cycles;
        toggle(1);
    }

    function stopTimer() {
      clearInterval(interval);
      toggle(1);
    }

    start = 0;


    startButton.addEventListener("click", startTimer);
    resetButton.addEventListener("click", resetTimer);
    stopButton.addEventListener("click", stopTimer);

