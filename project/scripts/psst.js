const products = [
    {
        id: "fc-1888",
        name: "place",
        avgRating: 4.5
    },
    {
        id: "fc-2050",
        name: "food",
        avgRating: 4.7
    },
    {
        id: "fs-1987",
        name: "nature",
        avgRating: 3.5
    },
    {
        id: "ac-2000",
        name: "experience",
        avgRating: 3.9
    },
    {
        id: "jj-1969",
        name: "suggestion",
        avgRating: 5.0
    }
];

// Function to populate the select options
function populateProductOptions() {
    const selectElement = document.getElementById('product');

    // Clear existing options
    selectElement.innerHTML = '<option value="">Choose a topic...</option>';

    // Populate options from the options array
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        selectElement.appendChild(option);
    });
}

// Call the function to populate options after DOM content is loaded
document.addEventListener('DOMContentLoaded', (event) => {
    populateProductOptions();
});

// Function to handle form submission
function handleFormSubmission(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Increment the review counter
    let reviewCounter = localStorage.getItem('reviewCounter');
    if (isNaN(reviewCounter) || reviewCounter === null) {
        reviewCounter = 0;
    } else {
        reviewCounter = parseInt(reviewCounter, 10);
    }
    reviewCounter += 1;
    localStorage.setItem('reviewCounter', reviewCounter);

    // Submit the form programmatically after updating the counter
    event.target.submit();
}

// Attach the form submission handler to the form
const formElement = document.querySelector('form');
if (formElement) {
    formElement.addEventListener('submit', handleFormSubmission);
} else {
    console.error('Form element not found.');
}