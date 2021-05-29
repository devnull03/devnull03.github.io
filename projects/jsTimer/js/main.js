let seconds = 0;
let started = false;

let QUOTESDATA = quotesData;

class Timer {
  constructor() {
    this.currentMode = 0;
    this.modes = ["default", "quotes"];
  }

  start() {
    let startButton = document.getElementById("start");
    started = !started;
    startButton.innerHTML = "Stop";
    if (!started) {
      this.calculateWPM();
      seconds = 0;
      startButton.innerHTML = "Start";
    }
    if (document.getElementById("generatedWordsDiv").innerHTML === "") {
      this.generateWords();
    }
  }
  reset() {
    document.getElementById("wpm").innerHTML = "? WPM";
    document.getElementById("timer").innerHTML = "this is the timer";
    seconds = 0;
    started = false;
    document.getElementById("generatedWords").innerHTML = "";
    document.getElementById("words").value = "";
    document.getElementById("modeInfo").innerHTML = "current: default";
    this.currentMode = 1;
    this.changeMode();
  }

  changeMode() {
    let element = document.getElementById("modeInfo");
    // let modeInfo = element.innerHTML.split(' ')[1];
    this.currentMode = !this.currentMode ? 1 : 0;
    document.getElementById("modeInfo").innerHTML = `current: ${
      this.modes[this.currentMode]
    }`;
    if (this.currentMode) {
      document.getElementById("words").style.display = "none";
    } else {
      document.getElementById("generatedWords").innerHTML = "";
      document.getElementById("words").style.display = "grid";
    }
  }

  roundTheNumber(number) {
    return number.toString().split(".")[0];
  }
  calculateWPM() {
    let words = Number(
      document.getElementById("generatedWords").innerHTML.length / 5
    );
    let wpm = words / (seconds / 60);
    document.getElementById("wpm").innerHTML = wpm.toFixed(2) + " " + "WPM";
  }

  generateWords() {
    if (this.currentMode === 1) {
      this.fetchQuote();
      return;
    }
    let randomStr = "";
    let words = Number(document.getElementById("words").value);

    for (let i = 0; i < words; i++) {
      randomStr =
        randomStr.concat(wordsData["words"][Math.floor(Math.random() * 999)]) +
        " ";
    }
    if (words > 0) {
      document.getElementById("generatedWords").innerHTML = randomStr;
    }
  }

  fetchQuote() {
    let randomQuote =
      QUOTESDATA["quotes"][Math.floor(Math.random() * 5362)]["text"];
    document.getElementById("generatedWords").innerHTML = randomQuote;
  }
}

let theTimer = new Timer();

let theThing = setInterval(() => {
  if (started) {
    seconds = seconds + 1;
    let localSeconds = 0;
    if (seconds > 60) {
      localSeconds =
        seconds - Number(theTimer.roundTheNumber(seconds / 60)) * 60;
    } else {
      localSeconds = seconds;
    }
    let minutes = theTimer.roundTheNumber(seconds / 60);
    document.getElementById("timer").innerHTML =
      "&nbsp;&nbsp;&nbsp;&nbsp;" +
      minutes +
      " " +
      localSeconds.toString() +
      "&nbsp;&nbsp;&nbsp;&nbsp;";
  }
}, 1000);

function load() {
  document.getElementById("words").addEventListener("keyup", (event) => {
    if (event.code === "Enter") {
      event.preventDefault();
      theTimer.generateWords();
    }
  });
}

document.addEventListener("keyup", (event) => {
  if (!(document.activeElement.nodeName == "INPUT")) {
    switch (event.code) {
      case "Space":
        theTimer.start();
        break;
      case "KeyR":
        theTimer.reset();
        break;
      case "KeyT":
        theTimer.generateWords();
        break;
      case "KeyM":
        theTimer.changeMode();
        break;
      default:
        break;
    }
  }
});

class SuperSecret_pog_Mod {
  static data;
  static activate() {
    QUOTESDATA = this.data;
  }
  static deactivate() {
    QUOTESDATA = quotesData;
  }
}
