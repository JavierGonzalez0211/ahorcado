let lettersPressed = [];

let mobileOs = /Android|webOS|iPhone|iPad|iPod/i;

let isMobile = mobileOs.test(navigator.userAgent);

if (isMobile) {
  console.log("USERAGENT", navigator.userAgent);
  let input = document.getElementById("input-letter-container");
  input.style.display = "flex";
}

document.addEventListener(
  "keyup",
  (event) => {
    let regExp = /[A-Za-zÑñ]/g;
    var keyValue = event.key.toUpperCase();
    var codeValue = event.code;
    let codeValueCondition = [
      codeValue.startsWith("Key"),
      codeValue === "Semicolon",
    ];
    let rightKeyPressed =
      regExp.test(keyValue) && codeValueCondition.includes(true);

    console.log("keyValue: " + keyValue);
    console.log("codeValue: " + codeValue);
    if (rightKeyPressed) {
      lettersPressed.push(keyValue);
      console.log("lettersPressed", lettersPressed);
    }
  },
  false
);
