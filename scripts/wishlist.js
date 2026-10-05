import { products } from "../data/product.js";
import { wishlistProducts, wishlistQuantity } from "./wishlistproducts.js";
import { cart, addToCart, saveToCart, cartQuantityFind } from "./cart.js";
import { increaseCartQuantity, decreaseCartQuantity } from "./utils/quantitySelector.js";
let productContainerHTML = '';

wishlistProducts.forEach((wishListItem) => {
 const targetId = typeof wishListItem === 'object' ? (wishListItem.productId || wishListItem.id) : wishListItem;

  let matchingItem;
  products.forEach((product) => {
    if (product.id === targetId) {
      matchingItem = product;
    }
  });

  if (!matchingItem) {
    console.warn('Product not found in catalog for item:', targetId);
    return;
  }

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
console.log(wishlistProducts);

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
  document.querySelector('.js-quantity-counter').innerHTML = cartQuantityFind();
 });
});

document.querySelector('.js-quantity-counter').innerHTML = cartQuantityFind();

document.querySelector('.js-wishlist-count').innerText = `${wishlistQuantity()} items`;

document.querySelector('.js-wishlist-counter').innerText = wishlistQuantity();