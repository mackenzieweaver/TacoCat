// Sum
function AddNumbers(num1, num2, num3, num4, num5) {
    let arr = [];
    for (let i = 0; i < arguments.length; i++) {
        if (!isNaN(arguments[i])) {
            arr.push(arguments[i]);
        }
    }
    const e = document.getElementById("numbers-result");
    if (arr.length == 0) {
        e.innerHTML = `<b>none</b>`;
    } else {
        e.innerHTML = `<b>${arr.reduce((acc, cur) => acc + cur, 0)}</b>`;
    }
}

// Least
function Least(num1, num2, num3, num4, num5) {
    let arr = [];
    for (let i = 0; i < arguments.length; i++) {
        if (!isNaN(arguments[i])) {
            arr.push(arguments[i]);
        }
    }
    const e = document.getElementById("numbers-result");
    if (arr.length == 0) {
        e.innerHTML = `<b>none</b>`;
    } else {
        e.innerHTML = `<b>${Math.min(...arr)}</b>`;
    }
}

// Greatest
function Most(num1, num2, num3, num4, num5) {
    let arr = [];
    for (let i = 0; i < arguments.length; i++) {
        if (!isNaN(arguments[i])) {
            arr.push(arguments[i]);
        }
    }
    const e = document.getElementById("numbers-result");
    if (arr.length == 0) {
        e.innerHTML = `<b>none</b>`;
    } else {
        e.innerHTML = `<b>${Math.max(...arr)}</b>`;
    }
}

// Mean
function Average(num1, num2, num3, num4, num5) {
    let arr = [];
    for (let i = 0; i < arguments.length; i++) {
        if (!isNaN(arguments[i])) {
            arr.push(arguments[i]);
        }
    }
    const e = document.getElementById("numbers-result");
    if (arr.length == 0) {
        e.innerHTML = `<b>none</b>`;
    } else {
        e.innerHTML = `<b>${arr.reduce((acc, cur) => acc + cur, 0) / arr.length}</b>`;
    }
}

// Product
function Product(num1, num2, num3, num4, num5) {
    let arr = [];
    for (let i = 0; i < arguments.length; i++) {
        if (!isNaN(arguments[i])) {
            arr.push(arguments[i]);
        }
    }
    const e = document.getElementById("numbers-result");
    if (arr.length < 2) {
        e.innerHTML = `<b>none</b>`;
    } else {
        e.innerHTML = `<b>${arr.reduce((acc, cur) => acc * cur, 1)}</b>`;
    }
}

// Factorial 
function Factorial(num1) {
    const e = document.getElementById("factorial-result");
    let result = 1;
    for (let i = num1; i > 1; i--) {
        result *= i;
    }
    e.innerHTML = `<b>${result}</b>`;
}

// Fizz Buzz
function FizzBuzz(fizz, buzz, upperLimit) {
    for (let i = 1; i <= upperLimit; i++) {
        if ((i % fizz == 0) && (i % buzz == 0)) {
            console.log('FizzBuzz');
        } else if (i % fizz == 0) {
            console.log('Fizz');
        } else if (i % buzz == 0) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
}

// Palindrome
function Palindrome(word) {
    const e = document.getElementById("palindrome-result");
    const r = document.getElementById("reversed-word");
    let reverse = word.split('').reverse().join('');
    r.innerHTML = `<b>${reverse}</b>`;
    if (word.toLowerCase() == reverse.toLowerCase()) {
        e.innerHTML = `<b>Palindrome!</b>`;
    } else {
        e.innerHTML = `<b>Not a palindrome...</b>`;
    }
}

// Clear Buttons
function ClearCalcBtns() {
    document.getElementById("num1").value = '';
    document.getElementById("num2").value = '';
    document.getElementById("num3").value = '';
    document.getElementById("num4").value = '';
    document.getElementById("num5").value = '';
    document.getElementById("num1").focus();
}

function ClearFactBtn() {
    document.getElementById("factorial-number").value = '';
    document.getElementById("factorial-number").focus();
}

function ClearFizzBuzz() {
    document.getElementById("fizz-num").value = '';
    document.getElementById("buzz-num").value = '';
    document.getElementById("upper-limit").value = '';
    document.getElementById("fizz-num").focus();
}

function ClearPalindrome() {
    document.getElementById("user-palindrome").value = '';
    document.getElementById("user-palindrome").focus();
}
