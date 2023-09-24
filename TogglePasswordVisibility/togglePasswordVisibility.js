const passwordInput = document.getElementById('passwordInput');
const togglePassword = document.getElementById('togglePassword');

togglePassword.addEventListener('click', () => {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    togglePassword.innerText = 'Hide';
  } else {
    passwordInput.type = 'password';
    togglePassword.innerText = 'Show';
  }
});
