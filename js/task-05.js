   

const refs = {
    input: document.querySelector('#name-input'),
    result : document.querySelector('#name-output')
};

refs.input.addEventListener('input', onInputChange)

function onInputChange(event) {
    console.log(event.currentTarget.value);
    refs.result.textContent = event.currentTarget.value;
}
   
// console.log(refs.inputEl, refs.result);