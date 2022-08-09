// ১২. একটা অবজেক্ট ডিক্লেয়ার করবে। সেটাতে তিনটা প্রপার্টি থাকবে। এবং কোন একটা প্রোপার্টি এর মান চেইঞ্জ করবা। 

// Solution:
var shoppingCart = {
    books: 3, 
    sunglass: 1,
    keyboard: 5,
}

console.log(shoppingCart);

// When value added to property
shoppingCart.keyboard = 20;
console.log(shoppingCart);

// change the value of property by using []
shoppingCart['keyboard'] = 55;
console.log(shoppingCart);

