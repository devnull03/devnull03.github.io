
var seconds = 0;
var started = false;

document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
        if (!(document.activeElement.nodeName == "INPUT")) {
            started = !started;
            if (!started) {
                calculateWPM();
                seconds = 0;
            }
        }
    } else if (event.code === 'KeyR') {
        document.getElementById("wpm").innerHTML = "? WPM";
        document.getElementById("timer").innerHTML = "this is the timer";
    }
})

function roundTheNumber(number) {
    return (number).toString().split(".")[0];
}

function calculateWPM() {
    var words = Number(document.getElementById("words").value);
    var wpm = words / (seconds / 60);
    document.getElementById("wpm").innerHTML = wpm.toFixed(2) + " " + "WPM";
}

var theThing = setInterval(() => {
    if (started) {
        seconds = seconds + 1;
        var localSeconds = 0;
        if (seconds > 60) {
            localSeconds = seconds - Number(roundTheNumber(seconds/60))*60;
        } else {
            localSeconds = seconds;
        };
        var minutes = roundTheNumber(seconds/60);
        document.getElementById("timer").innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;" + minutes + " " + localSeconds.toString() + "&nbsp;&nbsp;&nbsp;&nbsp;";
    }
}, 1000);
