

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
