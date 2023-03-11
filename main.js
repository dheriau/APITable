
// fetch ile api url gidilecek sonrasında gelen veri x fonksiyona aktarılacak

let COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments'
let USER_URL = 'https://jsonplaceholder.typicode.com/users'
let POST_URL = 'https://jsonplaceholder.typicode.com/posts'


fetch(COMMENTS_URL)
      .then(response => response.json())
      .then(data => yorumlariAl(data))

function yorumlariAl(yorumlar) {
    console.log('yorumlar', yorumlar)

}



/***------------ KULLANICILAR------------------------------ */

fetch(USER_URL)
.then(response => response.json())
.then(data => kullanicilariAl(data))

function kullanicilariAl(kullanicilarVeri) {
    console.log('kullanicilar', kullanicilarVeri)

    let kullanicilarDiv = document.getElementById('kullanicilar') 
    let temp = '';
    let sayac = 0;

    kullanicilarVeri.forEach((veri) => {
        
        sayac++;
        temp += ` 
         <tr>
           <th scope="row">${sayac}</th>
           <td>${veri.name}</td>
           <td>${veri.username}</td>
           <td>${veri.email}</td>
           <td>${veri.address.city}</td>
           <td>
           <button class="btn btn-info">

           <i class="fa-solid fa-pen-to-square"></i>
           </button>
           
           <button class="btn btn-danger"
           >
           <i class="fa-solid fa-trash"></i>
           
           </button>
           </td>
         </tr>
         
         `
        
    })

   

     kullanicilarDiv.innerHTML = temp
}



/*------------------- GONDERİLER --------------------*/


fetch(POST_URL)
.then(response => response.json())
.then(data => gonderileriAl(data))

function gonderileriAl(gonderiler) {
    console.log('gonderiler', gonderiler)
}



