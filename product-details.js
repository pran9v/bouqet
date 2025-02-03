// Get product ID from URL parameters
const urlParams = new URLSearchParams(window.location.search);
const productId = parseInt(urlParams.get('id'));

// Find the product
const product = products.find(p => p.id === productId);

// Update page title
document.title = product ? `${product.name} - Product Details` : 'Product Not Found';

// Get container element
const container = document.getElementById('product-detail-container');

// Render product details
if (product) {
  container.innerHTML = `
    <img class="product-detail-image" src="${product.image}" alt="${product.name}">
    <div class="product-detail-info">
      <h2 class="product-name">${product.name}</h2>
      <p class="product-description">${product.description}</p>
      <p class="product-price">$${product.price.toFixed(2)}</p>
      <p style="margin-top: 1rem">${product.details}</p>  

      <h3>仕様</h3>
      <ul class="product-specifications">
        ${product.specifications
          .map(spec => `<li>${spec}</li>`)
          .join('')}
      </ul>

      <h3>特徴</h3>
      <ul class="product-features">
        ${product.features
          .map(feature => `<li>${feature}</li>`)
          .join('')}
      </ul>

      <button class="cta-button" onclick="window.location.href='thankyou.html?id=${product.id}'">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/>
          <path d="M3 6h18"/>
          <path d="M16 10a4 4 0 0 1-8 0"/>
        </svg>
       カートに追加
      </button>
    </div>
  `;
} else {
  container.innerHTML = `
    <div class="error-message">
      <h2>Product Not Found</h2>
      <p>The requested product could not be found.</p>
    </div>
  `;
}
