let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})
const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault(); 

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields.");
        return;
    }

    alert(`Thank you, ${name}! Your message has been sent successfully.`);
    form.reset(); // Clear the form fields
});

// Animate Info Box on Scroll using Intersection Observer
const infoBox = document.querySelector(".info-box");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                infoBox.classList.add("visible");
                observer.unobserve(infoBox); // Stop observing after it appears
            }
        });
    },
    { threshold: 0.5 } // Triggers when 50% of the element is in view
);

observer.observe(infoBox);
