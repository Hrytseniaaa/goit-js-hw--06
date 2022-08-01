

const currentInput = document.querySelector('#validation-input');
console.log(currentInput, Number(currentInput.dataset.length));

currentInput.addEventListener('blur', onInputBlur);


function onInputBlur(event) {
    const length = event.currentTarget.value.length;
    if (length === Number(currentInput.dataset.length)) {
        changeClass('valid')   
    }
    if (length !== Number(currentInput.dataset.length)) {
        changeClass('invalid')
    }
    if (!length) {
         currentInput.classList = "";
    }

}


function changeClass(adding) {
    currentInput.classList = "";
    currentInput.classList.add(adding);
}

