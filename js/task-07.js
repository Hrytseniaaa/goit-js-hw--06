
const sliderEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text')
// console.log(sliderEl, textEl);

sliderEl.addEventListener('change', onFontSize);

function onFontSize(event) {
    textEl.style.fontSize = event.currentTarget.value + 'px'
}