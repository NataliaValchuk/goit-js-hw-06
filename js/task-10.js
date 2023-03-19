const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');

const boxesContainer = document.getElementById('boxes');
// Функція для генерації випадкового кольору
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

// Функція для створення колекції елементів
function createBoxes(amount) {
  // Створюємо масив з вказаною кількістю елементів
  const boxes = new Array(amount).fill('');
  // Генеруємо HTML-код для кожного елементу та об'єднуємо їх у рядок
  const boxesMarkup = boxes.reduce((acc, _, index) => {
    const size = 30 + index * 10;
    const color = getRandomHexColor();
    return (
      acc +
      `<div style="width: ${size}px; height: ${size}px; background-color: ${color}"></div>`
    );
  }, '');
  // Додаємо HTML-код у контейнер для елементів
  boxesContainer.insertAdjacentHTML('beforeend', boxesMarkup);
}

// Функція для очищення колекції елементів
function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

createBtn.addEventListener('click', () => {
  const amount = parseInt(document.querySelector('input').value);
  createBoxes(amount);
});

destroyBtn.addEventListener('click', () => {
  destroyBoxes();
});
