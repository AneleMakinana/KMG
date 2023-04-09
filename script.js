const sidebar = document.querySelector('.sidebar');


const toggleButton = document.querySelector('#toggle-button');


toggleButton.addEventListener('click', () => {

  sidebar.classList.toggle('active');
});
