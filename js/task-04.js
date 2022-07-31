



const counterValue = 0;

const refs  = {

    minus : document.querySelector('[data-action="decrement"]'),
    plus : document.querySelector('[data-action="increment"]'),
    value : document.querySelector('#value')

};

    console.log(refs.value, refs.minus, refs.plus);


refs.minus.addEventListener('click', () => {
    counterValue -= 1;
    refs.value.textContent = counterValue;
});

refs.plus.addEventListener ('click', plusToValue)

function plusToValue() {
    counterValue += 1;
    refs.value.textContent = counterValue;

    // 
}
