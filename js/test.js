const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show'); // Add the 'show' class
        } else {
            entry.target.classList.remove('show'); // Remove the 'show' class
        }
    });
});

// Specify the target element to observe
const hiddenEleents = document.querySelectorAll(".hidden")
hiddenEleents.forEach((el) => observer.observe(el));
