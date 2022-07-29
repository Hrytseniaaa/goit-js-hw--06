const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = [];

for (let ingredient of ingredients) {

  const ingredientItem = document.createElement('li');
  ingredientItem.textContent = ingredient;
  ingredientItem.classList.add('item');
  // console.log(ingredientItem);

  list.push(ingredientItem);
};
// console.log(...list);


const ingredientsEl = document.querySelector('ul#ingredients');
ingredientsEl.append(...list);
console.log(ingredientsEl);

// const ingredient = document.createElement('li')
// ingredient.textContent = 'Potatoes';
// ingredient.classList.add('item')
// console.log(ingredient);