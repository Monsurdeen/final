// const headtag =document.getElementById('gettext').innerHTML="go"

// Function to add unique hover effects with different background images
function addHoverEffectWithDifferentImages() {
    // Define each card with its corresponding hover image
    const cardImages = {
        card1: '../asset/img/business plan.avif', // Replace with the actual image paths
        card2: '../asset/img/program manger.avif',
        card3: '../asset/img/tax.webp',
        card4: '../asset/img/investment.webp',
        card5: '../asset/img/financial grow.webp',
        card6: '../asset/img/growth.avif',
    };

    // Loop through each card in the cardImages object
    Object.keys(cardImages).forEach(cardClass => {
        const card = document.querySelector(`.${cardClass}`);

        // Check if the card exists in the DOM
        if (card) {
            // Apply the unique background image on mouse enter
            card.addEventListener('mouseenter', () => {
                card.style.backgroundImage = `url('${cardImages[cardClass]}')`;
                card.style.backgroundSize = 'cover';
                card.style.backgroundPosition = 'center';
                card.style.transition = 'background-image 0.3s ease';
            });

            // Reset background to original on mouse leave
            card.addEventListener('mouseleave', () => {
                card.style.backgroundImage = ''; // Resets to the original background
            });
        }
    });
}

// Call the function when the page loads
window.onload = addHoverEffectWithDifferentImages;



document.querySelectorAll('.read-more').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});


const blogPosts = document.querySelectorAll('.blog-post');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
});

blogPosts.forEach(post => {
    observer.observe(post);
});




const heading = document.getElementById('blog');

heading.addEventListener('mouseover', () => {
    heading.classList.add('zoom');
});

heading.addEventListener('mouseleave', () => {
    heading.classList.remove('zoom');
});




const slider = document.querySelector('.testimonies-slider');
const prevButton = document.querySelector('.slider-button.prev');
const nextButton = document.querySelector('.slider-button.next');
let currentIndex = 0;

const slideWidth = document.querySelector('.testimony-card').offsetWidth;

// Move to the next slide
function nextSlide() {
  if (currentIndex < slider.children.length - 1) {
    currentIndex++;
    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }
}

// Move to the previous slide
function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }
}

// Event listeners for buttons
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);






document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById("typewriter");
    const text = textElement.textContent; // Get the original text
    textElement.textContent = ""; // Clear the text content initially

    let i = 0; // Start from the first character
    let isDeleting = false; // Flag to indicate if the text is being deleted
    const speed = 150; // Speed of typing (milliseconds between each letter)
    const deleteSpeed = 50; // Speed of erasing (milliseconds between each letter)
    const pause = 1500; // Pause time before starting to delete

    function typeWriter() {
        if (!isDeleting) {
            // Typing effect
            if (i < text.length) {
                textElement.textContent += text.charAt(i); // Add one character at a time
                i++;
                setTimeout(typeWriter, speed); // Call the function recursively with a delay
            } else {
                // After typing the full text, pause before deleting
                isDeleting = true;
                setTimeout(typeWriter, pause);
            }
        } else {
            // Deleting effect
            if (i > 0) {
                textElement.textContent = text.substring(0, i - 1); // Remove one character at a time
                i--;
                setTimeout(typeWriter, deleteSpeed); // Call the function recursively with a delay
            } else {
                // After deleting, start typing again
                isDeleting = false;
                setTimeout(typeWriter, pause); // Pause before starting to type again
            }
        }
    }

    typeWriter(); // Start the continuous typewriter effect
});

