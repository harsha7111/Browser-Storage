let userId = 1234;

let user = {
    name:'Max',
    age: 30,
    hobblies: ['sports', 'cooking']
}

localStorage.setItem('id', userId);
localStorage.setItem('user', JSON.stringify(user));
//localStorage.removeItem();
//localStorage.length();
//localStorage.key();
//localStorage.clear();

sessionStorage.setItem('id', 7899);
//sessionStorage.getItem();
//sessionStorage.removeItem();
//sessionStorage.length();
//sessionStorage.key();
//sessionStorage.clear();


document.cookie = `id = ${userId} max-age=300`; // expire
document.cookie = `user= ${JSON.stringify(user)}`;
//console.log(document.cookie);



 //open a connection to the named database
 const request = indexedDB.open("storagedummy", 2);
 request.onupgradeneeded = function(event){
  // Save the IDBDatabase interface 
   var db = event.target.result;   //acess to the database
   // Create an objectStore for this database
   var objectStore = db.createObjectStore("products", { keyPath: "id" });   //like primary key
   objectStore.transaction.oncomplete = function(event) {
     // Store values in the newly created objectStore.
     var store = db.transaction("products", "readwrite").objectStore("products");
     store.add({ id: 'p1',
     title: 'product1',
     price: 50.00 });
   };
 }

request.onerror = function(event) {
    console.log('ERROR!!!!!!')
}


var request1 = indexedDB.open("the_name", 2);

request1.onupgradeneeded = function(event) {
  var db = event.target.result;
  var objectStore = db.createObjectStore("customers", { keyPath: "ssn" });
  objectStore.transaction.oncomplete = function(event) {
    var customerObjectStore = db.transaction("customers", "readwrite").objectStore("customers");
      customerObjectStore.add({ ssn: "555-55-5555", name: "Donna", age: 32, email: "donna@home.org" });
  };
};
