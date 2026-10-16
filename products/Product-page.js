import { productsDetails } from './Product-details.js';

const ProductsContainer = document.querySelector('#products-container');

function renderProducts() {
    const Products = getProducts();
    
    ProductsContainer.innerHTML = productsDetails.map
    
        (product => `
         <article class="product-card">
            <h3>${product.name}</h3>

            <p>Price: ${product.price}<p>

            <button 
            class="add-button" 
            details-product-id="${product.id}"
            type="button"
            >
            Add to caet 
            </button>
            </article>
            
            
        `)
        .join('');
    
}

