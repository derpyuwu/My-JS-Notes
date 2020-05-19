//MINE

const prettyPrice = (price, decimal) => {
    var price2 = Math.floor(price);
    if(decimal > 1) {
        decimal = decimal * 0.01;
    }
    var total = price2 + decimal;
    console.log(total)

    

}

prettyPrice(10.591919, .95)


////JORDAN'S

const prettyPrice = (grossPrice, extension) => {
    if (Number.isInteger(extension)) {
      extension = extension * 0.01;
    }
    return Math.floor(grossPrice) + extension;
  };
  
  prettyPrice(2.2, 0.95); 
  prettyPrice(2.2, 95); 
  prettyPrice(2.2, 0);
  prettyPrice(2.2, 99); 