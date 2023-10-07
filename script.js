//your code here
let timer;
let running = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

function start() {
    if (!running) {
        running = true;
        document.getElementById("start").disabled = true;
        document.getElementById("pause").disabled = false;
        document.getElementById("stop").disabled = false;
        timer = setInterval(updateTime, 1000);
    }
}

function pause() {
    if (running) {
        running = false;
        clearInterval(timer);
        document.getElementById("pause").textContent = "Continue";
    } else {
        running = true;
        document.getElementById("pause").textContent = "Pause";
        timer = setInterval(updateTime, 1000);
    }
}

function stop() {
    running = false;
    clearInterval(timer);
    document.getElementById("time").textContent = "00:00:00";
    document.getElementById("start").disabled = false;
    document.getElementById("pause").disabled = true;
    document.getElementById("stop").disabled = true;
    document.getElementById("pause").textContent = "Pause";
    seconds = 0;
    minutes = 0;
    hours = 0;
}

function updateTime() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }

    const timeString = padZero(hours) + ":" + padZero(minutes) + ":" + padZero(seconds);
    document.getElementById("time").textContent = timeString;
}

function padZero(value) {
    return value < 10 ? "0" + value : value;
}
