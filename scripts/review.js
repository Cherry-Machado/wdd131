
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

function goBack() {
    window.location.href = "../form.html"; 
}

// Function to restart Reviews and return
function clearStorage() {
    reviewCounter = 0;
    localStorage.clear();
    window.location.href = "form.html"; 
}

