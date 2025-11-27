// small helpers
document.getElementById('year')?.appendChild(document.createTextNode(new Date().getFullYear()));

// fake form submit (reemplaza con tu backend o Formspree)
function fakeSubmit(e){
  e.preventDefault();
  alert('Gracias! Tu mensaje ha sido enviado. (Esto es una demo — conecta tu formulario real)');
  e.target.reset();
  return false;
}

// Mobile nav toggle
const btn = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
btn?.addEventListener('click', () => {
  if(!nav) return;
  nav.style.display = (nav.style.display === 'flex') ? 'none' : 'flex';
  nav.style.flexDirection = 'column';
  nav.style.background = 'white';
  nav.style.position = 'absolute';
  nav.style.right = '20px';
  nav.style.top = '64px';
  nav.style.padding = '12px';
  nav.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)';
});

// ScrollReveal animations
if(window.ScrollReveal){
  ScrollReveal().reveal('.hero-text', { distance: '40px', origin: 'left', duration: 900, delay: 80, easing: 'ease-out' });
  ScrollReveal().reveal('.hero-media', { distance: '20px', origin: 'bottom', duration: 900, delay: 120 });
  ScrollReveal().reveal('.feature-card', { distance: '20px', origin: 'bottom', duration: 700, interval: 80 });
  ScrollReveal().reveal('.model-card', { distance: '20px', origin: 'bottom', duration: 700, interval: 80 });
  ScrollReveal().reveal('.gallery-grid figure', { distance: '10px', origin: 'bottom', duration: 700, interval: 60 });
  ScrollReveal().reveal('.contact-form', { distance: '20px', origin: 'right', duration: 700 });
}
