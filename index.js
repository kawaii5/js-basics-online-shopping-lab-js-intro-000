var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({itemName: item, itemPrice: Math.floor(Math.random() * 100)});
  return item + " has been added to your cart."
}

function viewCart() {
  let len = cart.length;
  if(len == 0) {
    return "Your shopping cart is empty.";
  }
  let statement = "In your cart, you have ";
  for(let i = 0; i < len; ++i) {
    statement += cart[i].itemName + " at $" + cart[i].itemPrice;
    if(i < len - 1) {
      statement += ", ";
    }
    if(i == len - 2) {
      statement += "and ";
    }
  }
  return statement + ".";
}

function total() {
  let total = 0;
  for(let i = 0; i < cart.length; ++i) {
    total += cart[i].itemPrice;
  }
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
