document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  const hero = document.querySelector('.hero');
  const productContainer = document.getElementById('product-container');
  const bannerImages = [
    "https://images.unsplash.com/photo-1561434199-57b01d5b67a3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    "https://images.unsplash.com/photo-1565957949991-2f295d814345?q=80&w=2865&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1618239265038-9e4c865fbd10?q=80&w=2934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ];
  let currentSlide = 0;
  
  // Navbar scroll functionality
  window.addEventListener('scroll', () => {
    // Navbar background color change on scroll
    if (window.scrollY > 100) {
      navbar.classList.add('hidden');
    } else {
      navbar.classList.remove('hidden');
    }

// Update the last scroll position
  });

  // Mobile menu toggle
  mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Banner slider functionality
  function updateBackground() {
    hero.style.opacity = '0';
    setTimeout(() => {
      hero.style.backgroundImage = `url('${bannerImages[currentSlide]}')`;
      hero.style.opacity = '1';
    }, 500); // Adjusted to match transition timing
    currentSlide = (currentSlide + 1) % bannerImages.length;
  }

  // Set initial background and start auto-sliding
  updateBackground();
  setInterval(updateBackground, 5000);

  // Load products dynamically
  if (productContainer) {
    fetch('products.json')
      .then(response => response.json())
      .then(data => {
        data.forEach(product => {
          const productDiv = document.createElement('div');
          productDiv.classList.add('product');
          productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p class="price">$${product.price}</p>
            <a href="product-details.html" class="btn">Buy Now</a>
          `;
          productContainer.appendChild(productDiv);
        });
      })
      .catch(error => console.error('Error fetching products:', error));
  }
});
