
var seconds = 0;
var started = false;
var wordsElement = "<p class=\"generatedWords\" id=\"generatedWords\"></p>";

function load() {
    document.getElementById("words")
        .addEventListener("keyup", function (event) {
            if (event.code === "Enter") {
                event.preventDefault();
                generateWords();
            }
    })
}

document.addEventListener('keyup', event => {
    if (!(document.activeElement.nodeName == "INPUT")) {
        if (event.code === 'Space') {
            start();
        } else if (event.code === 'KeyR') {
            reset();
        } else if (event.code === 'KeyT') {
            generateWords();
        }
    }    
})

function start() {
    let startButton = document.getElementById("start");
    started = !started;
    startButton.innerHTML = "Stop";
    if (!started) {
        calculateWPM();
        seconds = 0;
        startButton.innerHTML = "Start";
    }
    if (document.getElementById("generatedWordsDiv").innerHTML === "") {
        generateWords();
    }
}
function reset() {
    document.getElementById("wpm").innerHTML = "? WPM";
    document.getElementById("timer").innerHTML = "this is the timer";
    seconds = 0;
    started = false;
    document.getElementById("generatedWords").innerHTML = "";
}


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

function generateWords() {
    var randomStr = "";
    var words = Number(document.getElementById("words").value);

    for (let i = 0; i < words; i++) {
        randomStr = randomStr.concat(data["words"][Math.floor(Math.random() * 999)]) + " ";
    };
    if (words >= 40) {
        document.getElementById("generatedWordsDiv").style.width = "70%";
    } else if (words >= 70) {
        document.getElementById("generatedWordsDiv").style.width = "90%";
    } 

    if (words > 0) {
        // document.getElementById("generatedWordsDiv").innerHTML = wordsElement;
        document.getElementById("generatedWords").innerHTML = randomStr;
    }
}
