let porterRecords = [
    {
        id: 1716164291000,
        fullName: "John Doe",
        location: "Igbaras, Iloilo",
        pesoRate: "550",
        imageUrl: "https://api.dicebear.com/9.x/avataaars/svg?seed=John"
    },
    {
         id: 1753266291000,
        fullName: "Jane Jane",
        location: "Antique, Iloilo",
        pesoRate: "700",
        imageUrl: "https://api.dicebear.com/9.x/avataaars/svg?seed=Jane"
    },
       {
         id: 1716467255122,
        fullName: "Mike Key",
        location: "Tubungan, Iloilo",
        pesoRate: "1000",
        imageUrl: "https://api.dicebear.com/9.x/avataaars/svg?seed=Mike"
       }
];

 const cardsContainer = document.getElementById('cardsContainer');
 const addForm = document.getElementById('record-form');

const renderCards  = () => {
      const porterArray = porterRecords.map((porters) => {
           return `<article class="profile-card">
    <div class="rating-container">
    <img src="${porters.imageUrl}" alt="picture" class="logo">
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
     <a class="button" href="">Request</a>
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

    const newArray = 
        {
            id: Date.now(),
            fullName: porterName,
            location: porterLocation,
            pesoRate: porterRate,
            imageUrl: porterImage,
        }
   
       porterRecords.push(newArray);
       console.log('Updated database:', porterRecords);

renderCards();
addForm.reset();
});

renderCards();
