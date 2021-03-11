

class Calculator{

    constructor() { 
        this.currentResult = 0;
        this.currentOperator = "+";
        this.currentNumber = "";
        this.operations = new Map();
        this.operations.set('+', function (num1, num2) {
            return Number(num1) + Number(num2)
        });
        this.operations.set('-', function (num1, num2) {
            return Number(num1) - Number(num2)
        });
        this.operations.set('*', function (num1, num2) {
            return Number(num1) * Number(num2)
        });
        this.operations.set('/', function (num1, num2) {
            return Number(num1) / Number(num2)
        });
        this.screen = "";
    }

    display(nextThing) {
        this.screen = this.screen + nextThing;
        document.getElementById("screenText").innerHTML = this.screen;
    }

    send(number) {
        if (this.screen.length >= 17) {
            return;
        }
        this.display(number);
        this.currentNumber += number;
        console.log(`number ${this.currentNumber}, res ${this.currentResult}`);
    }

    changeOperator(operator) {
        if (this.screen.length >= 17) {
            return;
        }
        let lastDigit = this.screen.substring(
            this.screen.length-1, this.screen.length
        )
        if (operator === lastDigit) {
            return;
        } else if (this.screen === "") {
            return;
        }

        this.display(operator)
        this.currentResult = this.operations.get(this.currentOperator)(this.currentResult, this.currentNumber);
        this.currentOperator = operator;
        this.currentNumber = "";
        console.log(`number ${this.currentNumber}, res ${this.currentResult}`);
    }

    clear() {
        this.screen = "";
        this.currentOperator = "+";
        this.currentNumber = "";
        this.currentResult = 0;
        this.display("");
    }

    back() {
        this.screen = this.screen.substring(0, this.screen.length - 1);
        this.currentNumber = this.currentNumber.substring(0, this.currentNumber.length - 1);
        
        this.display("");
    }

    calculate() {
        let lastDigit = this.screen.substring(
            this.screen.length-1, this.screen.length
        )
        if (lastDigit === this.currentOperator) {
            return;
        }
        this.currentResult = this.operations.get(this.currentOperator)(this.currentResult, this.currentNumber);
        this.screen = "";
        this.display(this.currentResult.toString());
        console.log(this.currentResult);
        this.currentNumber = String(this.currentResult);
        this.currentResult = 0;
        this.currentOperator = "+";
    }
    
}

const calc = new Calculator();

document.addEventListener('keyup', event => {
    if (!(document.activeElement.nodeName == "INPUT")) {
        console.log(event.code);
        switch (event.code) {
            case ('Numpad1') :
            case ('Digit1'):
               document.getElementById('1').click();
                break;
            case ('Numpad2'):
            case ('Digit2'):
               document.getElementById('2').click();
                break;
            case ('Numpad3'):
            case ('Digit3'):
               document.getElementById('3').click();
                break;
            case ('Numpad4'):
            case ('Digit4'):
               document.getElementById('4').click();
                break;
            case ('Numpad5'):
            case ('Digit5'):
               document.getElementById('5').click();
                break;
            case ('Numpad6'):
            case ('Digit6'):
               document.getElementById('6').click();
                break;
            case ('Numpad7'):
            case ('Digit7'):
               document.getElementById('7').click();
                break;
            case ('Numpad8'):
            case ('Digit8'):
               document.getElementById('8').click();
                break;
            case ('Numpad9'):
            case ('Digit9'):
               document.getElementById('9').click();
                break;
            case ('Numpad0'):
            case ('Digit0'):
               document.getElementById('0').click();
                break;
            case ('NumpadEnter'):
            case ('Enter'):
               document.getElementById('=').click();
               break;
            case ('NumpadAdd'):
               document.getElementById('+').click();
               break;
            case ('NumpadSubstract'):
            case ('Minus'):
               document.getElementById('-').click();
               break;
            case ('NumpadDivide'):
            case ('Slash'):
               document.getElementById('/').click();
               break;
            case ('NumpadMultiply'):
               document.getElementById('*').click();
                break;
            case ('Backspace'):
               document.getElementById('backspace').click();
               break;
            case ('Escape'):
               document.getElementById('clear').click();
               break;

       }
    }
});
