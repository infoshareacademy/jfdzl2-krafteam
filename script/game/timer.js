let seconds = 0;
let minutes = 0;
let hours = 0;


let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;


let interval = null;

let status = "stopped";


function stopWatch() {

    seconds++;

    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++;

        if (minutes / 60 === 1) {
            minutes = 0;
            hours++;
        }

    }

    if (seconds < 10) {
        displaySeconds = "0" + seconds.toString();
    } else {
        displaySeconds = seconds;
    }

    if (minutes < 10) {
        displayMinutes = "0" + minutes.toString();
    } else {
        displayMinutes = minutes;
    }

    if (hours < 10) {
        displayHours = "0" + hours.toString();
    } else {
        displayHours = hours;
    }

    document.getElementById("display").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;

}

const playSVG = '<svg aria-hidden="true" data-prefix="fas" data-icon="pause-circle" class="svg-inline--fa fa-pause-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm-16 328c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v160zm112 0c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v160z"></path></svg>'

function startStop() {
    var startStopButton = document.querySelector('#startStop');
    if (status === "stopped") {
        interval = window.setInterval(stopWatch, 1000);
        document.getElementById("startStop").innerHTML = "";
        status = "started";
        game.start();

        // startStopButton.classList = 'fas fa-pause-circle';
        startStopButton.innerHTML = playSVG;
    } else {
        window.clearInterval(interval);
        document.getElementById("startStop").innerHTML = "";
        status = "stopped";
        game.pause();

        startStopButton.classList = 'fas fa-play-circle';
    }

}


function reset() {
    var startStopButton = document.querySelector('#startStop')
    window.clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("display").innerHTML = "00:00:00";
    document.getElementById("startStop").innerHTML = "";
    status = "stopped";
    game.reset();

    startStopButton.classList = 'fas fa-play-circle';

}