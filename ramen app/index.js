// Data Stub
const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "photoss/istockphoto-1846848058-1024x1024.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "photoss/istockphoto-1473346116-612x612.webp", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "photoss/photo-1617421753170-46511a8d73fc.avif", rating: 3, comment: "Good but needs more flavor." },
    { id: 4, name: "Spicy Miso Ramen", restaurant: "Ramen-ya", image: "photoss/istockphoto-2064521882-1024x1024.jpg", rating: 3, comment: "Good but needs more flavor." },
];

// Function to display all ramens as images
function displayRamens() {
    const ramenMenu = document.getElementById('ramen-menu');
    ramenMenu.innerHTML = ''; 

    ramens.forEach(ramen => {
        const img = document.createElement('img');
        img.src = ramen.image;
        img.alt = ramen.name;
        img.addEventListener('click', () => handleClick(ramen)); // Handle image click

        ramenMenu.appendChild(img);
    });
}

// Function to display ramen details when an image is clicked
function handleClick(ramen) {
    document.getElementById('ramen-name').textContent = ramen.name;
    document.getElementById('ramen-restaurant').textContent = `Restaurant: ${ramen.restaurant}`;
    document.getElementById('ramen-rating').textContent = `Rating: ${ramen.rating}`;
    document.getElementById('ramen-comment').textContent = `Comment: ${ramen.comment}`;
}

function addSubmitListener() {
    const ramenForm = document.getElementById('ramen-form');
    
    ramenForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const name = document.getElementById('name').value.trim();
        const restaurant = document.getElementById('restaurant').value.trim();
        const image = document.getElementById('image').value.trim();
        const rating = parseInt(document.getElementById('rating').value);
        const comment = document.getElementById('comment').value.trim();

        if (!name || !restaurant || !image || isNaN(rating) || !comment) {
            alert("Please fill out all fields correctly.");
            return;
        }

        const newRamen = {
            id: ramens.length + 1,
            name,
            restaurant,
            image,
            rating,
            comment
        };

        ramens.push(newRamen); 

        displayRamens(); 
        ramenForm.reset(); 
    });
}

function main() {
    displayRamens(); 
    addSubmitListener(); 
}

document.addEventListener('DOMContentLoaded', main);
