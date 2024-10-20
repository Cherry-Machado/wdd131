
window.onload = function() {
    let reviewCounter = localStorage.getItem('reviewCounter');
    
    if (reviewCounter !== null) {
        reviewCounter = parseInt(reviewCounter) + 1;
        document.getElementById('reviewCount').textContent = reviewCounter;
        localStorage.setItem('reviewCounter', reviewCounter);
    } else {
        reviewCounter = 0;
        localStorage.clear();
        localStorage.setItem('reviewCounter', reviewCounter);
        document.getElementById('reviewCount').textContent = reviewCounter;
    }

    document.getElementById('currentyear').textContent = new Date().getFullYear();
};

// Function to restart Reviews and return

const mybuttonReturn = document.querySelector(".buttonReturn");
mybuttonReturn.addEventListener("click", () => window.location.href = "form.html");

const mybuttonReturnRst = document.querySelector(".buttonReturnRst");
mybuttonReturnRst.addEventListener("click", () => {
    reviewCounter = 0;
    localStorage.clear();
    window.location.href = "form.html"; 
});

