const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', (event) => {
  const value = event.currentTarget.value.trim();

  if (value) {
    nameOutput.textContent = value;
  } else {
    nameOutput.textContent = 'Anonymous';
  }
});
