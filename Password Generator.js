const passwordBox = document.getElementById("passwordBox");
const lengthInput = document.getElementById("length");
const includeNumbers = document.getElementById("includeNumbers");
const includeUppercase = document.getElementById("includeLetters");
const includeLowercase = document.getElementById("includesLetters");
const includeSymbols = document.getElementById("includeSymbols");
const generateBtn = document.getElementById("generate");
const passwordlen = document.getElementById("passwordlen");
const copybtn = document.getElementById("coptybtn");



const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{}|;:',.<>?/";


lengthInput.addEventListener("input", function() {
    passwordlen.innerText = "Length: " + lengthInput.value;
});

function generatePassword() {
    const len = parseInt(lengthInput.value);
    passwordlen.innerText = "Length: " + len;

    let string = "";
    if (includeUppercase.checked) string += uppercase;
    if (includeLowercase.checked) string += lowercase;
    if (includeNumbers.checked) string += numbers;
    if (includeSymbols.checked) string += symbols;

    if (string === "") {
        passwordBox.innerText = "Select options!";
        return;
    }

    let password = "";
    for (let i = 0; i < len; i++) {
        password += string[Math.floor(Math.random() * string.length)];
    }

    passwordBox.innerText = password;
}


generateBtn.addEventListener("click", generatePassword);

copybtn.addEventListener("click", () => {
    const password = passwordBox.innerText;
    if (password && password !== "Select options!") {
        navigator.clipboard.writeText(password);

        copybtn.innerHTML = "copied!";

        setTimeout(() => {
            copybtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-copy" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" />
            </svg>`;
        }, 3000);
    }
});