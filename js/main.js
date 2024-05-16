var typed = new Typed('#whoami', {
    strings: ["Cinematographer...", "Photographer...", "Video Editor...", "Automotive Videographer...",
        "Freelancer...", "Car/Bike enthusiast..."
    ],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
});


function toggleMenu() {
    var menuList = document.getElementById("menu-list");
    menuList.style.display = "none";
    if (menuList.style.display === "none") {
        menuList.style.display = "flex";
    } else {
        menuList.style.display = "none";
    }
}

function scrollToElement(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}



// Create an intersection observer instance for .hidden1
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
const hiddenElements1 = document.querySelectorAll(".hidden")
hiddenElements1.forEach((el) => observer.observe(el));

// Create an intersection observer instance for .hidden2
const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show'); // Add the 'show' class
        } else {
            entry.target.classList.remove('show'); // Remove the 'show' class
        }
    });
});

// Specify the target element to observe
const hiddenElements2 = document.querySelectorAll(".hidden2")
hiddenElements2.forEach((el) => observer2.observe(el));

// Create an intersection observer instance for .hidden3
const observer3 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show'); // Add the 'show' class
        } else {
            entry.target.classList.remove('show'); // Remove the 'show' class
        }
    });
});

// Specify the target element to observe
const hiddenElements3 = document.querySelectorAll(".hidden3")
hiddenElements3.forEach((el) => observer3.observe(el));

// Create an intersection observer instance for .hidden3
const observerforTOP = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        const button = document.getElementById('scrollToTopBtn'); // Select the button element
        if (entry.isIntersecting) {
            button.classList.remove('show'); // Remove the 'hidden' class
        } else {
            button.classList.add('show'); // Add the 'hidden' class
        }
    });
});

// Specify the target element to observe
const tohidefrom = document.querySelectorAll(".face")
tohidefrom.forEach((el) => observerforTOP.observe(el)); // Call observe() on each target element

function downloadPage() {
    window.open('https://krispro.gumroad.com/l/test', '_blank');
}

