document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



const genreElements = document.querySelectorAll('.genre');

genreElements.forEach(genre => {
    const genreImage = genre.querySelector('.imageGenre');
    const genreText = genre.querySelector('.genreText');

    genre.addEventListener('mouseover', () => {
        genreImage.style.filter = 'brightness(0.5)';
        genreImage.style.cursor = 'pointer';
        genreText.style.transform = 'translateY(0)';
        genreText.style.opacity = '1';
    });

    genre.addEventListener('mouseout', () => {
        genreImage.style.filter = 'none';
        genreText.style.transform = 'translateY(100%)';
        genreText.style.opacity = '0';
    });
});