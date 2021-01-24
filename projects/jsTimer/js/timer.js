
var seconds = 0;
var started = false;
var wordsElement = "<p class=\"test\" id=\"test\"></p>";

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
            started = !started;
            if (!started) {
                calculateWPM();
                seconds = 0;
            }
            if (document.getElementById("testDiv").innerHTML === "") {
                generateWords();
            }

        } else if (event.code === 'KeyR') {
            document.getElementById("wpm").innerHTML = "? WPM";
            document.getElementById("timer").innerHTML = "this is the timer";
            seconds = 0;
            started = false;
            document.getElementById("testDiv").innerHTML = "";
        } else if (event.code === 'KeyT') {
            generateWords();
        }
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

function generateWords() {
    var randomStr = "";
    var words = Number(document.getElementById("words").value);

    for (let i = 0; i < words; i++) {
        randomStr = randomStr.concat(data["words"][Math.floor(Math.random() * 999)]) + " ";
    };
    if (words >= 40) {
        document.getElementById("testDiv").style.width = "700px";
    } else if (words >= 70) {
        document.getElementById("testDiv").style.width = "90%";
    } 

    if (words > 0) {
        document.getElementById("testDiv").innerHTML = wordsElement;
        document.getElementById("test").innerHTML = randomStr;
    }
}
