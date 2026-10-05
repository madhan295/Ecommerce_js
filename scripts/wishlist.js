import { products } from "../data/product.js";
import { wishlistProducts } from "./wishlistproducts.js";
import { cart, addToCart, saveToCart } from "./cart.js";
import { increaseCartQuantity, decreaseCartQuantity } from "./utils/quantitySelector.js";
let productContainerHTML = '';

wishlistProducts.forEach((wishListItem) => {
 let matchingItem;

 products.forEach((product) => {
  if(product.id === wishListItem.id) matchingItem = product;
 });

 productContainerHTML += `
 <div class="product-container">
    <div class="image-container">
      <div class="product-label" style="background-color: ${matchingItem.tag.color}; color: ${matchingItem.tag.fontColor}">${matchingItem.tag.name}</div>
      <img src="${matchingItem.image}" alt="" class="product-image">
      <div class="close-container">
        <img src="/images/icons/close.png" alt="" class="close-icon">
      </div>
    </div>

    <div class="details">
      <div class="review">
        <div class="review-rating">
          <img src="/images/icons/review-star.png" alt="">
          <p>${matchingItem.rating.rate}</p>
        </div>
        <p class="review-count">(${matchingItem.rating.count})</p>
      </div>

      <div class="product-spec">
        <p class="product-name">${matchingItem.name}</p>
        <p class="product-description">${matchingItem.description}</p>
      </div>

      <p class="price">$${matchingItem.price}</p>

      <div class="quantiy-container">
        <p class="quantity-labe">Quantity:</p>
        <div class="quantity-selector">
          <div class="quantity-adjuster decrease js-decrease" data-product-id ="${matchingItem.id}">
            <p>-</p>
          </div>
          <p class="quantity js-quantity js-quantity-${matchingItem.id}">1</p>
          <div class="quantity-adjuster increase js-increase" data-product-id ="${matchingItem.id}">
            <p>+</p>
          </div>
        </div>
      </div>

      <button class="add-to-cart js-add-to-cart-button" data-product-id ="${matchingItem.id}">
        <img src="/images/icons/add-to-cart.png" alt="">
        Add to Cart
      </button>
    </div>
   </div>
 `;
});

document.querySelector('.js-products-grid').innerHTML = productContainerHTML;

document.querySelectorAll('.js-decrease').forEach((button) => {
 button.addEventListener('click', () => {
  const productId = button.dataset.productId;
  decreaseCartQuantity(productId);
 });
});

document.querySelectorAll('.js-increase').forEach((button) => {
 button.addEventListener('click', () => {
  const productId = button.dataset.productId;
  increaseCartQuantity(productId);
 });
});

document.querySelectorAll('.js-add-to-cart-button').forEach((button) => {
 button.addEventListener('click', ()=>{
  const productId = button.dataset.productId;

  const quantityEl = document.querySelector(`.js-quantity-${productId}`);
  const selectedQuantity = Number(quantityEl.innerHTML);

  addToCart(productId, selectedQuantity);

  let quantity = 0;
  cart.forEach((cartItem) => {
   quantity += cartItem.quantity;
  })

  document.querySelector('.js-quantity-counter').innerHTML = quantity;
 });
});

document.querySelector('.js-wishlist-count').innerText = `${wishlistProducts.length} items`;

document.querySelector('.js-wishlist-counter').innerText = wishlistProducts.length;