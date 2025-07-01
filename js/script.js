function sale() {
    alert("All Tickets are 30% Off");
}


function greetMe() {
console.log("Hello world");
}
greetMe();


function validateEmail(email) {
    return email.includes("@") && email.includes(".");
  }
  console.log(validateEmail("test@example.com"));

  
  const prices = [10.99, 19.99, 9.99];

  function getTotalPrice() {
    return prices.reduce((total, price) => total + price, 0);
  }
  console.log(`Total price: $${getTotalPrice()}`);
  