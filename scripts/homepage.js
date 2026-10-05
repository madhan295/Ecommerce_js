import { products } from "../data/product.js";
import { cart, addToCart, saveToCart, cartQuantityFind } from "./cart.js";
import { increaseCartQuantity, decreaseCartQuantity } from "./utils/quantitySelector.js";
import { wishlistProducts } from "./wishlistproducts.js";

let productHTML = '';

products.forEach((product) => {
 productHTML += `<div class="product-container">
    <div class="image-container">
      <div class="product-label" style="background-color: ${product.tag.color}; color: ${product.tag.fontColor}">${product.tag.name}</div>
      <img src="${product.image}" alt="" class="product-image">
      <div class="heart-container js-heart-container" data-product-id="${product.id}">
        <img src="/images/icons/wishlist.png" alt="" class="heart-icon">
      </div>
    </div>

    <div class="details">
      <div class="review">
        <div class="review-rating">
          <img src="/images/icons/review-star.png" alt="">
          <p>${product.rating.rate}</p>
        </div>
        <p class="review-count">${product.rating.count}</p>
      </div>

      <div class="product-spec">
        <p class="product-name">${product.name}</p>
        <p class="product-description">${product.description}</p>
      </div>

      <p class="price">$${product.price}</p>

      <div class="quantiy-container">
        <p class="quantity-labe">Quantity:</p>
        <div class="quantity-selector">
          <div class="quantity-adjuster decrease js-decrease" data-product-id ="${product.id}">
            <p>-</p>
          </div>
          <p class="quantity js-quantity js-quantity-${product.id}">1</p>
          <div class="quantity-adjuster increase js-increase" data-product-id ="${product.id}">
            <p>+</p>
          </div>
        </div>
      </div>

      <button class="add-to-cart js-add-to-cart-button" data-product-id ="${product.id}">
        <img src="/images/icons/add-to-cart.png" alt="">
        Add to Cart
      </button>
    </div>
   </div>`;
});

document.querySelector('.js-products-grid').innerHTML = productHTML;

//ADD TO CART BUTTON


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

  let quantity = cartQuantityFind();
  document.querySelector('.js-quantity-counter').innerHTML = quantity;
  console.log(cart);
 });
});

let quantity = cartQuantityFind();
document.querySelector('.js-quantity-counter').innerHTML = quantity;

//WISHLIST BUTTON

document.querySelectorAll('.js-heart-container').forEach((button) => {
 button.addEventListener('click', () => {
  const productId = button.dataset.productId;
  button.classList.toggle('active');

  const index = wishlistProducts.indexOf(productId);
  if(index !== -1) wishlistProducts.splice(index, 1);
  else wishlistProducts.push(productId);

  document.querySelector('.js-wishlist-counter').innerHTML = wishlistProducts.length;
 });
});