let currentEditId = null;
let porterRecords = [
    {
        id: 1716164291000,
        fullName: "John Doe",
        location: "Igbaras, Iloilo",
        pesoRate: "550",
        imageUrl: "https://api.dicebear.com/9.x/avataaars/svg?seed=John",
        request: "https://www.facebook.com/profile.php?id=61589700432011",
    },
    {
         id: 1753266291000,
        fullName: "Jane Jane",
        location: "Antique, Iloilo",
        pesoRate: "700",
        imageUrl: "https://api.dicebear.com/9.x/avataaars/svg?seed=Jane",
         request: "https://www.facebook.com/profile.php?id=61589700432011",
    },
       {
         id: 1716467255122,
        fullName: "Mike Key",
        location: "Tubungan, Iloilo",
        pesoRate: "1000",
        imageUrl: "https://api.dicebear.com/9.x/avataaars/svg?seed=Mike",
         request: "https://www.facebook.com/profile.php?id=61589700432011",
       }
];

 const cardsContainer = document.getElementById('cardsContainer');
 const addForm = document.getElementById('record-form');

const renderCards  = () => {
      const porterArray = porterRecords.map((porters) => {
           return `<article class="profile-card" data-id="${porters.id}">
    <div class="rating-container">
    <img src="${porters.imageUrl}" alt="picture" class="logo">
    <button class="delete-btn">Delete</button>
      <button class="edit-btn">Edit</button>
    </div>
    <h2>${porters.fullName}</h2>
    <div class="location-container">
     <span class="material-symbols-outlined location-icon">location_on</span>
     <address>${porters.location}</address>
     </div>
     
     <div class="card-footer">
        <div class="price-container">
     <p class="base-rate">Base Rate</p>
     <p class="price">PHP ${porters.pesoRate}</p>
     </div>
     <a class="button" href="${porters.request}">Request</a>
     </div>
   </article>`
      }).join('');
     
      cardsContainer.innerHTML = porterArray;
}


addForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const porterName = document.getElementById('name').value;
    const porterLocation = document.getElementById('location').value;
    const porterImage = document.getElementById('imageUrl').value;
    const porterRate = document.getElementById('num').value;
    const porterRequest = document.getElementById('porterRequest').value;


        if(currentEditId == null){
              const newArray = {
            id: Date.now(),
            fullName: porterName,
            location: porterLocation,
            pesoRate: porterRate,
            imageUrl: porterImage,
            request: porterRequest
        }
            porterRecords.push(newArray);
        } else {

          const recordToUpdate = porterRecords.find((record) => record.id === currentEditId);
        
            recordToUpdate.fullName = porterName;
            recordToUpdate.location =  porterLocation;
            recordToUpdate.pesoRate = porterRate;
            recordToUpdate.imageUrl = porterImage;
            recordToUpdate.request  = porterRequest
        
            currentEditId = null;
        }
       console.log('Updated database:', porterRecords);
   
renderCards();
addForm.reset();
});

cardsContainer.addEventListener('click',(event) => {
    if(event.target.classList.contains('delete-btn')){

         const card = event.target.closest('.profile-card');

         const idToDel = Number(card.dataset.id);   

         porterRecords = porterRecords.filter((record) => record.id !== idToDel);
         renderCards();
    } else if (event.target.classList.contains('edit-btn')){

         const card = event.target.closest('.profile-card');

         const idToEdit = Number(card.dataset.id);  

           currentEditId = idToEdit;

         const foundPorter = porterRecords.find((record) => record.id === idToEdit);
           document.getElementById('name').value = foundPorter.fullName;
           document.getElementById('location').value = foundPorter.location;
           document.getElementById('num').value = foundPorter.pesoRate;
           document.getElementById('imageUrl').value = foundPorter.imageUrl;
           document.getElementById('porterRequest').value = foundPorter.request;
    }
   
    renderCards();
});

renderCards();
