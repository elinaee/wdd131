const burger = document.querySelector('#burgerMenu')
const closeButton = document.querySelector('#closeButton')
const nav = document.querySelector('#menu')

burger.addEventListener('click', () => {
    nav.classList.toggle('open')
    closeButton.classList.toggle('show')
})

closeButton.addEventListener('click', () => {
    nav.classList.toggle('open')
    closeButton.classList.toggle('show')
})


// Date and time for the footer
document.addEventListener('DOMContentLoaded', (event) => {
    const lastModified = document.lastModified;
    document.getElementById("date-time").textContent = lastModified;
});


// Sample of temple objects
const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
      alt: "Aba Nigeria Temple"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
      alt: "Manti Utah Temple"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
      alt: "Payson Utah Temple"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
      alt: "Yigo Guam Temple"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
      alt: "Washington D.C. Temple"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
      alt: "Lima Perú Temple"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
      alt: "Mexico City Mexico Temple"
    },
    
    // Add more temple objects here...
    {
        templeName: "Preston England",
        location: "Chorley, Lancashire, England",
        dedicated: "1998, June, 7",
        area: 69630,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/preston-england/400x250/preston-temple-765118-wallpaper.jpg",
        alt: "Preston England Temple"
    },
    {
        templeName: "Hong Kong China",
        location: "Kowloon City, Hong Kong",
        dedicated: "1996, May, 26",
        area: 51921,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/hong-kong-china/400x640/hong-kong-china-temple-lds-39528-wallpaper.jpg",
        alt: "Hong Kong China Temple"
    },
    {
        templeName: "Lisbon Portugal",
        location: "Lisbon, Portugal",
        dedicated: "2019, September, 15",
        area: 23730,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lisbon-portugal/400x640/01-6d84eb0301da0baca818212965160d2db12879c1.jpeg",
        alt: "Lisbon Portugal Temple"
    },
   
];


  
createTempleCard(temples);

const oldTemplesLink = document.querySelector(".old");
const newTemplesLink = document.querySelector(".new");
const largeTemplesLink = document.querySelector(".large");
const smallTemplesLink = document.querySelector(".small");

oldTemplesLink.addEventListener("click", function(event) { 
    event.preventDefault();
    createTempleCard(temples.filter(temple => new Date (temple.dedicated) < new Date ("2000-01-01")));
    closeMenu();
});

newTemplesLink.addEventListener("click", function(event) {
    event.preventDefault(); 
    createTempleCard(temples.filter(temple => new Date (temple.dedicated) >= new Date ("2000-01-01")));
    closeMenu();
});

largeTemplesLink.addEventListener("click", function(event)  {
    event.preventDefault();
    createTempleCard(temples.filter(temple => temple.area > 90000));
    closeMenu();
});

smallTemplesLink.addEventListener("click", function(event)  {
    event.preventDefault();
    createTempleCard(temples.filter(temple => temple.area < 10000));
    closeMenu();
});

function closeMenu() {
    nav.classList.remove('open');
    closeButton.classList.remove('show');
    
}


function createTempleCard(filteredTemples) {
    document.querySelector("#photos").innerHTML = "";
    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area  = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector("#photos").appendChild(card);

    });

}
