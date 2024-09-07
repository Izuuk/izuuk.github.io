// Function to handle loading animation and page fade-in
window.addEventListener('load', () => {
  const loadingScreen = document.querySelector('.loading-screen');
  const loadingImg = document.querySelector('.loading-img');
  
  // Ensure image is loaded before starting the animation
  loadingImg.onload = () => {
    setTimeout(() => {
      loadingScreen.style.opacity = '0';
      
      // Once the loading screen is fully faded out, remove it
      setTimeout(() => {
        loadingScreen.style.display = 'none';
        document.body.classList.add('fade-in');
      }, 500); // wait for the fade-out transition (0.5 seconds)
      
    }, 2500); // wait for the bounce animation (2.5 seconds)
  };

  // Fallback if the image fails to load
  loadingImg.onerror = () => {
    loadingScreen.style.opacity = '0';
    setTimeout(() => {
      loadingScreen.style.display = 'none';
      document.body.classList.add('fade-in');
    }, 500);
  };
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Fade-in Section on Scroll
const sections = document.querySelectorAll('.section');

const fadeInOnScroll = () => {
  sections.forEach(section => {
    const sectionPosition = section.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    if (sectionPosition < screenPosition) {
      section.classList.add('fade-in');
    }
  });
};

window.addEventListener('scroll', fadeInOnScroll);

// Change Header Background on Scroll
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('header-scrolled');
  } else {
    header.classList.remove('header-scrolled');
  }
});
