// 1. Load initial data or fall back to defaults
export let wishlistProducts = JSON.parse(localStorage.getItem('wishlistProducts')) || [
  { productId: "prod_072" },
  { productId: "prod_033" }
];

export function saveToWishList() {
  localStorage.setItem('wishlistProducts', JSON.stringify(wishlistProducts));
}

export function wishlistQuantity() {
  return wishlistProducts.length;
}

export function removeFromWishlist(productId) {
 let newCart = [];
 wishlistProducts.forEach((cartItem) => {
  if(cartItem.productId != productId) newCart.push(cartItem);
 });
 wishlistProducts = newCart;

  saveToWishList();
}