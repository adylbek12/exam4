document.addEventListener('DOMContentLoaded', function () {
    let emailInput = document.getElementById('email');
    let passwordInput = document.getElementById('password');
  
    emailInput.addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        passwordInput.focus();
      }
    });
  
    passwordInput.addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        login();
      }
    });
  
    function login() {
      let email = emailInput.value;
      let password = passwordInput.value;
  
      if (email && password) {
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        alert('Login successful!');
      } else {
        alert('Enter email and password!');
      }
    }
  });


