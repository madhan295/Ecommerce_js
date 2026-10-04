export function decreaseCartQuantity(productId) {
 const quantityEl = document.querySelector(`.js-quantity-${productId}`);
 const currentQuantity = Number(quantityEl.innerText);
 if(currentQuantity > 1){
  quantityEl.innerText = currentQuantity - 1; 
 }
}

export function increaseCartQuantity(productId) {
 const quantityEl = document.querySelector(`.js-quantity-${productId}`);
 const currentQuantity = Number(quantityEl.innerText);
 quantityEl.innerText = currentQuantity + 1;
}