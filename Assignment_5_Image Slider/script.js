
const images = [
    'https://res.cloudinary.com/dan0iboqp/image/upload/v1658767233/samples/imagecon-group.jpg',
    'https://res.cloudinary.com/dan0iboqp/image/upload/v1658767235/samples/landscapes/nature-mountains.jpg',
    'https://res.cloudinary.com/dan0iboqp/image/upload/v1717253328/technn_mczkpv.jpg'
];

let currentIndex = 0;
const slider = document.getElementById('slider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function updateImage() {
    slider.src = images[currentIndex];
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
});

// Initialize the slider
updateImage();