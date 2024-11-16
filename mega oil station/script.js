document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menu-icon");
    const navLinks = document.getElementById("nav-links");
    const menuIconBar = document.getElementById("menu-icon-bar");

    menuIcon.addEventListener("click", function() {
        navLinks.classList.toggle("show");

        // Toggle icon between bars and close
        if (navLinks.classList.contains("show")) {
            menuIconBar.classList.replace("fa-bars", "fa-times");
        } else {
            menuIconBar.classList.replace("fa-times", "fa-bars");
        }
    });
});
// Form handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Collect form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        message: document.getElementById('message').value
    };
    
    // Here you would typically send the data to a server
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will get back to you soon!');
    
    // Reset form
    this.reset();
});




export default DropdownMenuDemo;
