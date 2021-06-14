function productDescription(strings, productName, productPrice) {
    console.log(strings);
    console.log(productName);
    console.log(productPrice);

    let priceCategory = 'cheap';

    if (productPrice > 20) {
        priceCategory = 'fairly priced';
    }

    // return 'This is a product!';
    // return `${strings[0]}${productName}${strings[1]}${priceCategory}${strings[2]}`;
    return {name: prodName, price: prodPrice};
}

const prodName = 'JavaScript Course';
const prodPrice = 29.99;

const productOutput = productDescription`This product (${prodName}) is ${prodPrice}.`;
console.log(productOutput);