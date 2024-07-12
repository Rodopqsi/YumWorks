document.addEventListener('DOMContentLoaded', function() {
    const productCards = document.querySelectorAll('.cake-card');

    productCards.forEach(function(card) {
        const stars = card.querySelectorAll('.star');

        stars.forEach(function(star, index){
            star.addEventListener("click", function(){
                for (let i = 0; i <= index; i++) {
                    stars[i].classList.add('checked');
                }
                for (let i = index + 1; i < stars.length; i++) {
                    stars[i].classList.remove('checked');
                }
            });
        });

        // Establecer calificaciones iniciales basadas en el atributo de calificación de datos
        const ratingValue = parseInt(card.querySelector('.rating').getAttribute('data-rating'));
        stars.forEach((star, index) => {
            if (index < ratingValue) {
                star.classList.add('checked');
            }
        });
    });
});