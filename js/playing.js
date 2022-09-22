//*capture the word chosen by the opponent
let secretWord = document.cookie
    .replace(/(?:(?:^|.*;\s*)secretWord\s*\=\s*([^;]*).*$)|^.*$/, "$1")
    .toUpperCase();

//* check if it's a mobile device to add an input to dispaly keyword
let mobileOs = /Android|webOS|iPhone|iPad|iPod/i;
let isMobile = mobileOs.test(navigator.userAgent);
if (isMobile) {
    let input = document.getElementById("input-letter-container");
    input.style.display = "flex";
}

//*create the elements to show the correct letters area
const rightLettersContainer = document.querySelector(
    ".right-letters-container"
);
let secretWordArray = Array.from(secretWord);
let remainingLetters = [...secretWordArray];
const fragment = document.createDocumentFragment();
const template = document.querySelector("#templateLetterCOntainer").content;

secretWordArray.forEach((element, index) => {
    let currentLetter = template.querySelector(".letter");
    currentLetter.textContent = element;
    currentLetter.setAttribute("id", index);
    const clone = template.cloneNode(true);
    fragment.appendChild(clone);
});
rightLettersContainer.appendChild(fragment);

/**
 * verify if the key pressed is valid for the game:
 * only letters, not numbers or special caracters
 * @param {*} key the key pressed
 * @returns the key pressed y it is valid
 */
const pressedKeys = (key) => {
    let regExp = /[A-Za-zÑñ]/g;
    var keyValue = key.toUpperCase();

    let rightKeyPressed = regExp.test(keyValue) && keyValue.length === 1;

    if (rightKeyPressed) {
        return keyValue;
    }
    return false;
};

/**
 * @param {*} letter the letter pressed
 * @returns array with indices or false if the
 * letter is not included in secret word
 */
const isCorrectLetter = (letter) => {
    let indices = [];
    let idx = secretWordArray.indexOf(letter);
    while (idx != -1) {
        indices.push(idx);
        remainingLetters.splice(remainingLetters.indexOf(letter), 1);
        idx = secretWordArray.indexOf(letter, idx + 1);
    }
    // console.log("indices", indices);
    return indices.length > 0 ? indices : false;
};

const showCorrectLetters = (arrayIndices) => {};

//*capture the keys pressed by the user
let letterPressed = "";
let letterPressedArray = [];
const wrongLetters = document.querySelector(".wrong-letters");
document.addEventListener(
    "keyup",
    (event) => {
        letterPressed = pressedKeys(event.key);
        if (letterPressed) {
            letterPressedArray = [...letterPressedArray, letterPressed].join(
                ""
            );
        }

        isCorrectLetter(letterPressed);
        // console.log("indices", isCorrectLetter(letterPressed));
        // console.log("primera letra", rightLettersContainer.firstElementChild);

        //*add the elements to show the wrong letters area
        wrongLetters.textContent = letterPressedArray;
    },
    false
);

console.log("playing", secretWord);
