// Palindrome
function Palindrome(word) {
    const c = document.getElementById("case-sensitive").checked;
    const n = document.getElementById("number-sensitive").checked;
    const s = document.getElementById("special-char-sensitive").checked;

    const e = document.getElementById("palindrome-result");
    const r = document.getElementById("reversed-word");

    if (c) {
        word = word.toLowerCase();
    }

    if (n) {
        word = word.replace(/[0-9]/g, '');
    }

    if (s) {
        word = word.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]|\s/gi, '');
    }

    if (!word) {
        e.innerHTML = `<b>n/a</b>`;
        swal("You made Taco Cat sad", "Because you didn't enter a word", "error");
        return;
    }

    let reverse = word.split('').reverse().join('');
    r.innerHTML = `<b>${reverse}</b>`;
    if (word == reverse) {
        e.innerHTML = `<b>Palindrome!</b>`;
    } else {
        e.innerHTML = `<b>Not a palindrome...</b>`;
    }
}
// Clear Button
function ClearPalindrome() {
    document.getElementById("user-palindrome").value = '';
    document.getElementById("user-palindrome").focus();
}
