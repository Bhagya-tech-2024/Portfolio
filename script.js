
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio Page Loaded');
    

    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            alert(`You clicked on ${event.target.textContent}`);
        });
    });

});
