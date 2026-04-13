// Function to simulate adding a book to the cart
document.querySelectorAll('.buy-btn').forEach(button => {
    button.addEventListener('click', function() {
        const bookTitle = this.parentElement.querySelector('h3').innerText;
        alert(bookTitle + " has been added to your shopping cart!");
    });
});

// Category Filter (Concept)
function filterCategory(category) {
    console.log("Filtering by: " + category);
    // Future step: Hide/Show books based on category
}