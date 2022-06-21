function addition(x, y) {
    return x + y
}

function subtraction(x, y){
    return x - y
}

function multiplication(x, y){
    return x * y
}

function division(x, y){
    return x / y
}

function modulus(x, y){
    return x % y
}
let choices=['1', '2', '3', '4', '5', '6'];

while (true) {
    let choice = prompt(`Select operation \n
    1.Addition \n
    2.Subtraction \n
    3.Multiplication \n
    4.Division \n
    5.Modulus \n
    Enter choice(1/2/3/4/5): `);

    if (choice in choices) {
        let num1 = parseFloat(prompt("Enter first number: "));
        let num2 = parseFloat(prompt("Enter second number: "));

        if (choice == '1') {
            alert(`${num1} + ${num2} = ${addition(num1, num2)}`);
        } 
        else if (choice == '2') {
            alert(`${num1} - ${num2} = ${subtraction(num1, num2)}`);
        }
        else if (choice == '3') {
            alert(`${num1} * ${num2} = ${multiplication(num1, num2)}`);
        }
        else if (choice == '4') {
            alert(`${num1} / ${num2} = ${division(num1, num2)}`);
        }
        else if (choice == '5') {
            alert(`${num1} % ${num2} = ${modulus(num1, num2)}`);
        }
        let next_calculation = confirm("Do another calculation?");

        if (next_calculation == false) {
            break
        }
    } else {
        alert("Invalid input")
    }
    
}