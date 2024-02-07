function takeSquareRoot() {
    let number = +document.getElementById("input1").value;
    

    let squareRoot = Math.sqrt(number);
    document.getElementById("result").innerHTML = squareRoot;
    
}
function takeAbsoluteValue() {
    let number = +document.getElementById("input2").value;

    let absoluteValue = Math.abs(number);
    document.getElementById("result").innerHTML = absoluteValue;
}

function takeSine() {
    let number = +document.getElementById("input3").value;

    let absoluteValue = Math.sin(number);
    document.getElementById("result").innerHTML = Sine;
}

function takeCosine() {
    let number = +document.getElementById("input4").value;

    let absoluteValue = Math.cos(number);
    document.getElementById("result").innerHTML = Cosine;
}

function takeTangent() {
    let number = +document.getElementById("input5").value;

    let absoluteValue = Math.tan(number);
    document.getElementById("result").innerHTML = Tangent;
}
// Make another function for takeAbsoluteValue
