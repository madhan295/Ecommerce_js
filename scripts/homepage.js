// const products = [{
//     id: "prod_001",
//     name: "Noise-Canceling Over-Ear Headphones",
//     category: "Electronics",
//     description: "Upgrade your tech setup with this premium noise-canceling over-ear headphones.",
//     price: 199.99,
//     rating: { rate: 4.8, count: 420 },
//     image: "images/products/prod_001.jpg",
//     tag: {
//       name: "Top Seller",
//       color: "#ff9900",
//       fontColor: "#000000"
//     }
//   },
//   {
//     id: "prod_002",
//     name: "Custom RGB Mechanical Keyboard",
//     category: "Electronics",
//     description: "Upgrade your tech setup with this premium custom rgb mechanical keyboard.",
//     price: 129.5,
//     rating: { rate: 4.7, count: 310 },
//     image: "images/products/prod_002.jpg",
//     tag: {
//       name: "Only 3 left",
//       color: "#cc0000",
//       fontColor: "#ffffff"
//     }
//   },
//   {
//     id: "prod_003",
//     name: "Ergonomic Wireless Gaming Mouse",
//     category: "Electronics",
//     description: "Upgrade your tech setup with this premium ergonomic wireless gaming mouse.",
//     price: 69.99,
//     rating: { rate: 4.6, count: 245 },
//     image: "images/products/prod_003.jpg",
//     tag: {
//       name: "Best Value",
//       color: "#009900",
//       fontColor: "#ffffff"
//     }
//   },
//   {
//     id: "prod_004",
//     name: "Waterproof Portable Bluetooth Speaker",
//     category: "Electronics",
//     description: "Upgrade your tech setup with this premium waterproof portable bluetooth speaker.",
//     price: 89,
//     rating: { rate: 4.5, count: 180 },
//     image: "images/products/prod_004.jpg",
//     tag: {
//       name: "New Arrival",
//       color: "#0066cc",
//       fontColor: "#ffffff"
//     }
//   },
//   {
//     id: "prod_005",
//     name: "Fitness Tracker Smartwatch",
//     category: "Electronics",
//     description: "Upgrade your tech setup with this premium fitness tracker smartwatch.",
//     price: 159.99,
//     rating: { rate: 4.4, count: 520 },
//     image: "images/products/prod_005.jpg",
//     tag: {
//       name: "Trending",
//       color: "#ff0099",
//       fontColor: "#ffffff"
//     }
//   },
//   {
//     id: "prod_006",
//     name: "True Wireless Earbuds with ANC",
//     category: "Electronics",
//     description: "Upgrade your tech setup with this premium true wireless earbuds with anc.",
//     price: 119,
//     rating: { rate: 4.6, count: 390 },
//     image: "images/products/prod_006.jpg",
//     tag: {
//       name: "Limited Edition",
//       color: "#6600cc",
//       fontColor: "#ffffff"
//     }
//   }];


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