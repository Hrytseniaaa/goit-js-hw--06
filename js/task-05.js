   

const refs = {
    input: document.querySelector('#name-input'),
    result : document.querySelector('#name-output')
};

refs.input.addEventListener('input', onInputChange)

function onInputChange(event) {
    const value = event.target.value.trim();
    console.log(refs.result);
    if (!value) {
        refs.result.textContent = 'Anonymous' 
        return;
    }

    refs.result.textContent = value;
    // if (refs.result = ) {
    //     refs.result.textContent = Anonymous;
    // }


    
}
   
// console.log(refs.inputEl, refs.result);