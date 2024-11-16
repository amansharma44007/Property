var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2500);    
}

function toggleNav() {
    var navMenu = document.getElementById("navMenu");
    navMenu.classList.toggle("show"); // Toggle the "show" class
}

document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                } else {
                    entry.target.classList.remove("show");
                }
            });
        },
        { threshold: 0.5 } // Adjust this threshold as needed
    );

    const serviceBoxes = document.querySelectorAll(".service-box");
    serviceBoxes.forEach(box => observer.observe(box));
});

document.addEventListener("DOMContentLoaded", () => {
    const logos = document.querySelectorAll(".logo-item");
    logos.forEach((logo, index) => {
        logo.style.animationDelay = `${index * 0.3}s`; // Adjust delay time for staggered effect
    });
});


// Sample properties data for dynamic cards
const properties = [
    {
        image: 'https://via.placeholder.com/400x180', // Replace with actual image URLs
        name: 'M3M CAPITAL',
        location: 'Sector 113 Gurgaon',
        price: '₹ 1.25 Cr',
    },
    {
        image: 'https://via.placeholder.com/400x180', // Replace with actual image URLs
        name: 'SMART WORLD ORCHARD',
        location: 'Sector-61, Gurgaon',
        price: '₹ 1.52 Cr',
    },
    {
        image: 'https://via.placeholder.com/400x180', // Replace with actual image URLs
        name: 'SMART WORLD',
        location: 'On Dwarka Expressway',
        price: 'On Request',
    },
    {
        image: 'https://via.placeholder.com/400x180', // Replace with actual image URLs
        name: 'M3M ATRIUM',
        location: 'Sec 114, Gurgaon',
        price: '₹ 1.31 Cr',
    }
];

// Function to create a card
function createCard(property) {
    const card = document.createElement('div');
    card.classList.add('card');

    const image = document.createElement('img');
    image.src = property.image;
    image.alt = property.name;
    card.appendChild(image);

    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');

    const title = document.createElement('h3');
    title.textContent = property.name;
    cardContent.appendChild(title);

    const location = document.createElement('p');
    location.textContent = property.location;
    cardContent.appendChild(location);

    const price = document.createElement('div');
    price.classList.add('price');
    price.textContent = property.price;
    cardContent.appendChild(price);

    const button = document.createElement('a');
    button.classList.add('button');
    button.href = "#";
    button.textContent = "Know More";
    cardContent.appendChild(button);

    card.appendChild(cardContent);

    return card;
}

// Populate the cards in the card container
const cardContainer = document.getElementById('cardContainer');
properties.forEach(property => {
    const card = createCard(property);
    cardContainer.appendChild(card);
});





