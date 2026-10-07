export let cart = JSON.parse(localStorage.getItem('cart'));

if(!cart) {
 cart = [{
 productId: "prod_092",
 quantity: 1
}, {
 productId: "prod_093",
 quantity: 1
}, {
 productId: "prod_094",
 quantity: 1
}, {
 productId: "prod_095",
 quantity: 1
}, {
 productId: "prod_101",
 quantity: 1
}, {
 productId: "prod_090",
 quantity: 1
}];
}


export function saveToCart () {
 localStorage.setItem('cart', JSON.stringify(cart));
}

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

  saveToCart();
}

export function removeFromCart(productId) {
 let newCart = [];
 cart.forEach((cartItem) => {
  if(cartItem.productId != productId) newCart.push(cartItem);
 });
 cart = newCart;
 saveToCart();
}

export function cartQuantityFind () {
 let quantity = 0;
 cart.forEach((cartItem) => {
  quantity += cartItem.quantity;
 });
 return quantity;
}