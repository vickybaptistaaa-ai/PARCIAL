// Elements
const loadBtn = document.getElementById('load-btn');
const themeBtn = document.getElementById('theme-btn');
const cardsContainer = document.getElementById('cards-container');

// Fetches the JSON file and builds the product cards only when the button is clicked
const loadCatalog = () => {
  fetch('products.json')
    .then(res => res.json())
    .then(data => {
      let cardsHTML = "";
      data.forEach(item => {
        cardsHTML += `<div class="product-card">`;
        cardsHTML += `<h3>${item.title}</h3>`;
        cardsHTML += `<p>${item.description}</p>`;
        cardsHTML += `<p class="details">Price: $${item.details}</p>`;
        cardsHTML += `</div>`;
      });
      cardsContainer.innerHTML = cardsHTML;
    });
};

// Toggles the dark/light theme class on the body
const toggleTheme = () => {
  document.body.classList.toggle('dark-mode');
};

loadBtn.addEventListener('click', loadCatalog);
themeBtn.addEventListener('click', toggleTheme);
