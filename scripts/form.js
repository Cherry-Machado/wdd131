const products = [
  { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "power laces", averagerating: 4.7 },
  { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

document.addEventListener('DOMContentLoaded', function() {

    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;

    const productSelect = document.getElementById('product');
    
    if (productSelect) {
      
        products.forEach(product => {
            const option = document.createElement('option');
            option.value = product.id;
            option.textContent = product.name;
            productSelect.appendChild(option);
        });
    }

    if (!localStorage.getItem('reviewCounter')) {
        localStorage.setItem('reviewCounter', 0);
    }

    document.getElementById('currentyear').textContent = new Date().getFullYear();

    const form = document.getElementById('reviewForm');
    
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();  // Prevent default form submission

            // Increment the review counter
            let reviewCounter = parseInt(localStorage.getItem('reviewCounter')) || 0;
            reviewCounter += 1;
            localStorage.setItem('reviewCounter', reviewCounter);

            window.location.href = "review.html";
        });
    }
});

