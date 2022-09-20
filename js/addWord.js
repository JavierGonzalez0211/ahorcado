let input = document.getElementById("addWord");
let btnSaveAndStart = document.getElementById("saveAndStart");
let inputValue;

function updateValue(e) {
    inputValue = e.target.value;
}

const saveAndStart = () => {
    document.cookie = "secretWord =" + inputValue;
    window.location.href = "http://127.0.0.1:5500/playing.html";
    input.value = "";
};

input.addEventListener("input", updateValue);
btnSaveAndStart.addEventListener("click", saveAndStart);
