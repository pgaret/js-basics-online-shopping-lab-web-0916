var cart;

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return Number(t)
}

function getCart(){
  return cart;
}

function viewCart(){
  var str = "In your cart, you have "
  if (cart.length == 0) {
    console.log("Your shopping cart is empty.")
  } else {
    for (let i = 0; i < cart.length; i++) {
      str += `${cart[i]} at $undefined`
      if (i < cart.length - 1) {
        str += ", "
      } else {
        str += "."
      }
    }
  }
  console.log(str);
}

function addToCart(item){
  cart.push(item);
  console.log(`${item} has been added to your cart.`)
  return cart;
}

function removeFromCart(item){
  if (cart.includes(item)){
    cart.splice(cart.indexOf(item), 1)
  }
  else {
    console.log("That item is not in your cart.")
  }
}

function placeOrder(card){
  if (!card) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $NaN, which will be charged to the card ${card}.`)
  }
  cart = []
}
