export let cart = [{
 id: "prod_092",
 quantity: 1
}, {
 id: "prod_093",
 quantity: 1
}, {
 id: "prod_094",
 quantity: 1
}];

export function addToCart(productId, selectedQuantity) {
 
  let matchingItem;
  cart.forEach((cartItem) => {
   if(cartItem.productId == productId) matchingItem = cartItem;
  });

  if(matchingItem) {
   matchingItem.quantity += selectedQuantity;
  } else {
   cart.push({
    productId: productId,
    quantity: selectedQuantity
   })
  }

  console.log(cart);
}

export function removeFromCart(productId) {
 let newCart = [];
 cart.forEach((cartItem) => {
  if(cartItem.id != productId) newCart.push(cartItem);
 });
 cart = newCart;
 console.log(cart);
}