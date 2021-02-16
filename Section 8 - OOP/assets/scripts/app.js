class Product {
    title = 'DEFAULT';
    imageUrl;
    dsescription;
    price;

}

console.log(new Product());

const productList = {
    products: [
        // new Product(),
        {
            title: 'A Pillow',
            imageUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ghi-best-pillows-1573668641.png?crop=0.946xw:0.727xh;0.0288xw,0.163xh&resize=1200:*',
            dsescription: 'A soft pillow',
            price: 19.99
        },
        {
            title: 'A Carpit',
            imageUrl: 'https://i.pinimg.com/236x/a1/43/be/a143bebe70cbb2b48826e04c833e39fc--turkish-carpets-magic-carpet.jpg',
            dsescription: 'A Carpit which you might like - or not!',
            price: 89.99
        }
    ],
    render() {
        const renderHook = document.getElementById('app');
        const prodList = document.createElement('ul');
        prodList.className = 'product-list';
        for (const prod of this.products) {
            const prodEl = document.createElement('li');
            prodEl.className = 'product-item';
            prodEl.innerHTML = `
                <div class="product-item__content">
                    <img src="${prod.imageUrl}" alt="${prod.title}">
                    <div>
                        <h2>${prod.title}</h2>
                        <h3>\$${prod.price}</h3>
                        <p>${prod.dsescription}</p>
                        <button>Add to Cart</button>
                    </div>
                </div>
            `;
            prodList.append(prodEl);
        }
        renderHook.append(prodList);
    }
};

productList.render();