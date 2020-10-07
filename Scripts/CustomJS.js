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
// Clear Button
function ClearPalindrome() {
    document.getElementById("user-palindrome").value = '';
    document.getElementById("user-palindrome").focus();
}
