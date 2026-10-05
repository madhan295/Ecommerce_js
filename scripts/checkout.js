import { cart, removeFromCart } from "./cart.js";
import { products } from "../data/product.js";
import { decreaseCartQuantity, increaseCartQuantity } from "./utils/quantitySelector.js";

let mainHTML = '';

cart.forEach((cartItem) => {
 let matchingItem;

 products.forEach((item) => {
  if(cartItem.id === item.id) matchingItem = item;
 });

 mainHTML += `
 <div class="product-container js-product-container-${matchingItem.id}">
    <div class="image-container">
      <div class="product-label" style="background-color: ${matchingItem.tag.color}; color: ${matchingItem.tag.fontColor}">${matchingItem.tag.name}</div>
      <img src="${matchingItem.image}" alt="" class="product-image">
      <div class="close-container">
        <img src="/images/icons/close.png" alt="" class="close-icon js-close-icon" data-product-id ="${matchingItem.id}">
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

    </div>
    </div>
    `;
});

document.querySelector('.js-product-list').innerHTML = mainHTML;

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

let quantity = 0;
cart.forEach((cartItem) => {
 quantity += cartItem.quantity;
});

document.querySelector('.js-cartSummary-quantity').innerText = quantity;

document.querySelectorAll('.js-close-icon').forEach((button) => {
  button.addEventListener('click', () => {
    const productId = button.dataset.productId;
    removeFromCart(productId);
    const container = document.querySelector(`.js-product-container-${productId}`);
    container.remove();
  });
})