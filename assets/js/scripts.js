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



