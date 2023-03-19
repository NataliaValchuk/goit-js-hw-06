const fontControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

// Встановлення розміру шрифту при завантаженні сторінки
text.style.fontSize = fontControl.value + 'px';

fontControl.addEventListener('input', function () {
  text.style.fontSize = fontControl.value + 'px';
});
