const storBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retrieve-btn');

let db;

const dbRequest = indexedDB.open('StorageDummy', 1);

dbRequest.onsuccess = function(event) {
  db = event.target.result;
}

dbRequest.onupgradeneeded = function(event) {
  db = event.target.result;

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
  if (!db) {
    return;
  }
 const pruductStore = db
  .transaction('products', 'readwrite')
  .objectStore('products');
  pruductStore.add({
    id: 'p2', 
    title: 'A Second Product', 
    price: 122.99, 
    tags: ['Expensive', 'Lexury']
  });
});

retrBtn.addEventListener('click', () => {
  const pruductStore = db
    .transaction('products', 'readwrite')
    .objectStore('products');
  const request = pruductStore.get('p2');

  request.onsuccess = function() {
    console.log(request.result);
  }
});