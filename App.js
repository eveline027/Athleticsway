const toggleButton = document.querySelector('.toggle');
const navLinks  = document.querySelector('.nav-links ul');

toggleButton.addEventListener('click', () => {
  toggleButton.classList.toggle('active');
  navLinks .classList.toggle('active');
});