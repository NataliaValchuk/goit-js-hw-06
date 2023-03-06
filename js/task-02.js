const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulEl = document.getElementById('ingredients');

for (const ingredient of ingredients) {
  const listItem = document.createElement('li'); // <li></li>

  listItem.innerText = ingredient; // <li>{ingredient}</li>

  ulEl.append(listItem);

  console.log(listItem);
}