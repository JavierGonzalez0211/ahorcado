let lettersPressed = [];

document.addEventListener(
  "keyup",
  (event) => {
    // let regExp = /([A-Za-z])/g;
    let regExp = /[A-Za-zÑñ]/g;
    var keyValue = event.key.toUpperCase();
    var codeValue = event.code;
    let codeValueCondition = [
      codeValue.startsWith("Key"),
      codeValue === "Semicolon",
    ];
    let rightKeyPressed =
      regExp.test(keyValue) && codeValueCondition.includes(true);

    // console.log("rightKey", rightKey);
    console.log("keyValue: " + keyValue);
    console.log("codeValue: " + codeValue);
    if (rightKeyPressed) {
      //   console.log("keyValue", keyValue);
      lettersPressed.push(keyValue);
      console.log("lettersPressed", lettersPressed);
    }
  },
  false
);
