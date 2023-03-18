 const controls = document.querySelector('#controls');
const boxesContainer = document.querySelector('#boxes');

controls.addEventListener('click', handleControlsClick);

function handleControlsClick(event) {
  if (event.target.dataset.create) {
    const amount = Number(controls.querySelector('input').value);
    createBoxes(amount);
  }

  if (event.target.dataset.destroy) {
    destroyBoxes();
  }
}

function createBoxes(amount) {
  let size = 30;
  let boxesHTML = '';

  for (let i = 0; i < amount; i++) {
    const color = getRandomHexColor();
    const boxHTML = `<div style="width: ${size}px; height: ${size}px; background-color: ${color};"></div>`;
    boxesHTML += boxHTML;
    size += 10;
  }

  boxesContainer.insertAdjacentHTML('beforeend', boxesHTML);
}

function destroyBoxes() {
  boxesContainer.innerHTML = ""
};

    function getRandomHexColor() {
      return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, '0')}`;
    }

