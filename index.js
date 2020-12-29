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
  return total;
}

function removeFromCart(item) {
  let foundItem = -1;
  for(let i = 0; i < cart.length; ++i) {
    if(cart[i].itemName == item) {
      foundItem == i;
    }
  }
  if(foundItem < 0) {
    return "That item is not in your cart.";
  }
}

function placeOrder(cardNumber) {
  // write your code here
}
