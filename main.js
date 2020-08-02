

function greater(){
 
    let a = Number(document.getElementById("a").value) ;
    let b = Number(document.getElementById("b").value) ;

    if (a > b) {
        document.getElementById("op").innerHTML = ">" ;
        document.getElementById("out").innerHTML = "a is bigger" ;
    } else {
        document.getElementById("op").innerHTML = "<" ;
        document.getElementById("out").innerHTML = "b is bigger" ;
    };
};

function add(){
 
    let a = Number(document.getElementById("a").value) ;
    let b = Number(document.getElementById("b").value) ;
    document.getElementById("op").innerHTML = "+" ;
    document.getElementById("out").innerHTML = `Answer : ${a+b}` ;
};

function sub(){
 
    let a = Number(document.getElementById("a").value) ;
    let b = Number(document.getElementById("b").value) ;
    document.getElementById("op").innerHTML = "-" ;
    document.getElementById("out").innerHTML = `Answer : ${a-b}` ;
};

function divide(){
 
    let a = Number(document.getElementById("a").value) ;
    let b = Number(document.getElementById("b").value) ;
    document.getElementById("op").innerHTML = "/" ;
    document.getElementById("out").innerHTML = `Answer : ${a/b}` ;
};

function multiply(){
 
    let a = Number(document.getElementById("a").value) ;
    let b = Number(document.getElementById("b").value) ;
    document.getElementById("op").innerHTML = "*" ;
    document.getElementById("out").innerHTML = `Answer : ${a*b}` ;
};
