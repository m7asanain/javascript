const storeBtn = document.getElementById('store-btn');
const retrieveBtn = document.getElementById('retrieve-btn');

const dbRequest = indexedDB.open('DummyStorage', 1);

dbRequest.upgradeneeded = function (event) {  // onsuccess return: Uncaught DOMException 
  const db = event.target.result;

  const objStore = db.createObjectStore('products', {keyPath: 'id'});

  objStore.transaction.oncomplete = function(event) {
    const productsStore = db
      .transaction('products', 'readwrite')
      .objStore('products');
    productsStore.add({
      id: 'p1', 
      title: 'A First Product', 
      price: 12.99, 
      tags: ['Expensive', 'Luxury']
    });
  }
};

dbRequest.onerror = function (event) {
  console.log('ERROR!');
};

storeBtn.addEventListener('click', () => {

});

retrieveBtn.addEventListener('click', () => {

});