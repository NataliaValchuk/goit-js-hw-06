const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // перешкоджає перезавантаженню сторінки при відправці форми

  //Деструктуризація об'єкта loginForm.elements
  const { email, password } = loginForm.elements;

  if (email.value === '' || password.value === '') {
    alert('Всі поля повинні бути заповнені');
  } else {
    const formData = {
      email: email.value,
      password: password.value,
    };

    console.log(formData);

    loginForm.reset();
  }
});
