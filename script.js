```javascript
window.addEventListener('scroll', () => {

    const cards = document.querySelectorAll('.service-card, .highlight-card, .training-box');

    cards.forEach(card => {

        const position = card.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if(position < screenPosition){
            card.style.opacity = '1';
            card.style.transform = 'translateY(0px)';
        }

    });

});
```
function toggleMenu(){
    document.getElementById("navMenu").classList.toggle("active");
}

function closeMenu(){
    document.getElementById("navMenu").classList.remove("active");
}