

class Calculator{

    constructor() { 
        this.currentResult = 0;
        this.operations = new Map();
        for (let i = 0; i < 10; i++) {
            this.operations.set(`${i}`, document.getElementById(`${i}`));
        }
    }
    
}
