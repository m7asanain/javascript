const storBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retrieve-btn');

const dbRequest = indexedDB.open('StorageDummy', 1);

dbRequest.onupgradeneeded = function(event) {
  const db = event.target.result;

  const objStore = db.createObjectStore('products', { keyPath: 'id' });

  objStore.transaction.oncomplete = function(event) {
    const pruductStore = db
      .transaction('products', 'readwrite')
      .objectStore('products');
    pruductStore.add({
      id: 'p1', 
      title: 'A First Product', 
      price: 12.99, 
      tags: ['Expensive', 'Lexury']
    });
  }
};

dbRequest.onerror = function(event) {
  console.log('ERROR!');
}

storBtn.addEventListener('click', () => {
 
});

retrBtn.addEventListener('click', () => {

});