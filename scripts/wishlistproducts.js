export let wishlistProducts = JSON.parse(localStorage.getItem('wishlistProducts'));

if(!wishlistProducts) {
 wishlistProducts =[{
 productId: "prod_072"
}, {
 productId: "prod_033"
}];
}

export function saveToWishList() {
 localStorage.setItem('wishlistProducts', JSON.stringify(wishlistProducts));
}

export function wishlistQuantity() {
 let quantity = 0;
 wishlistProducts.forEach((product) => {
  quantity ++;
 });
 return quantity;
}
