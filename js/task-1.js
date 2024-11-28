function makeTransaction(quantity, pricePerDroid, customerCredits) {
  // Toplam fiyatı hesapla
  let totalPrice = quantity * pricePerDroid;

  // Eğer toplam fiyat müşteri kredilerinden az veya eşitse
  if (totalPrice <= customerCredits) {
    // Sipariş başarıyla alındı
    return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
  } else {
    // Yetersiz bakiye
    return "Insufficient funds!";
  }
}


console.log(makeTransaction(5, 3000, 23000)); 
console.log(makeTransaction(3, 1000, 15000)); 
console.log(makeTransaction(10, 5000, 8000)); 
console.log(makeTransaction(8, 2000, 10000)); 
console.log(makeTransaction(10, 500, 5000)); 
