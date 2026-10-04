import { products } from "../data/product.js";
import { cart } from "./cart.js";
import { wishlistProducts } from "./wishlist.js";

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
          <div class="quantity-adjuster decrease">
            <p>-</p>
          </div>
          <p class="quantity">1</p>
          <div class="quantity-adjuster increase">
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

document.querySelectorAll('.js-add-to-cart-button').forEach((button) => {
 button.addEventListener('click', ()=>{
  const productId = button.dataset.productId;

  let matchingItem;

  cart.forEach((cartItem) => {
   if(cartItem.productId == productId) matchingItem = cartItem;
  });

  if(matchingItem) {
   matchingItem.quantity += 1;
  } else {
   cart.push({
    productId: productId,
    quantity: 1
   })
  }

  let quantity = 0;
  cart.forEach((cartItem) => {
   quantity += cartItem.quantity;
  })

  document.querySelector('.js-quantity-counter').innerHTML = quantity;

  console.log(cart);
 });
});

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