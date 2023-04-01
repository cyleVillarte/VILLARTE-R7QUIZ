function calc() {
    let op = document.getElementById("op").value
    let numOne = document.getElementById("numOne").value
    let numTwo = document.getElementById("numTwo").value

    numOne = Number(numOne);
    numTwo = Number(numTwo);
    let result = document.getElementById("ans");
    switch(op) {
        case '+':
            result.innerHTML = numOne + numTwo;
        break;
        case '-':
            result.innerHTML = numOne - numTwo;
        break;
        case '*':
            result.innerHTML = numOne * numTwo;
        break;
        case '/':
            result.innerHTML = numOne / numTwo;
        break;
        default:
            result.style.color="red";
            result.innerHTML = "Invalid Input";
        }

}