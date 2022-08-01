function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body')
const btnEl = document.querySelector('.change-color');
const colorValue = document.querySelector(('.color'))

console.log(btnEl, colorValue);


btnEl.addEventListener('click', onColorChange)


function onColorChange() {
  const newColor = getRandomHexColor();
  bodyEl.style.backgroundColor = newColor;
  colorValue.textContent = newColor;
}

