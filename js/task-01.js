const numberOfCategories = categories.children.length;
console.log("Number of Categories:", numberOfCategories)
// console.log('tsugan');

const list = categories.children;

for (let li of list) {
    const categoriesName = li.querySelector('.item h2').textContent;
    console.log('Category:', categoriesName);

    const categoriesLength = li.querySelector(".item ul").children.length;
    console.log('Elements:', categoriesLength);

}
