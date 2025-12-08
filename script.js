document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('service-modal');
  const modalTitle = document.getElementById('service-modal-title');
  const modalBody = document.getElementById('service-modal-body');
  const closeBtn = modal?.querySelector('.modal-close');

  function openModal(serviceKey) {
    const content = getServiceContent(serviceKey);
    modalTitle.textContent = content.title;
    modalBody.innerHTML = content.body;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    closeBtn?.focus();
  }

  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  }

  function getServiceContent(key) {
    switch (key) {
      case 'apps':
        return {
          title: 'Aplicaciones móviles',
          body: '<p>Desarrollo nativo e híbrido para iOS y Android, publicación en tiendas y soporte continuo.</p>'
        };
      case 'idea':
        return {
          title: '¿Tienes una idea?',
          body: '<p>Te acompañamos desde la definición del MVP hasta el primer despliegue en producción.</p>'
        };
      default:
        return {
          title: 'Servicio',
          body: '<p>Detalle del servicio seleccionado. Personalizaremos este contenido más adelante.</p>'
        };
    }
  }

  document.querySelectorAll('.service-more').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const key = link.getAttribute('data-service');
      openModal(key);
    });
  });

  closeBtn?.addEventListener('click', () => closeModal());
  modal?.querySelector('.modal-backdrop')?.addEventListener('click', () => closeModal());

  // Fallback: delegate close button clicks
  document.addEventListener('click', (e) => {
    const target = e.target;
    if (target && target.classList && target.classList.contains('modal-close')) {
      e.preventDefault();
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });
});
// Mobile menu toggle
const toggle = document.querySelector('.menu-toggle');
const navItems = document.querySelector('.nav-items');
const header = document.querySelector('.site-header');

if (toggle && navItems) {
  toggle.addEventListener('click', () => {
    const open = navItems.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}

// Sticky header shadow on scroll
let lastY = 0;
const onScroll = () => {
  const y = window.scrollY || document.documentElement.scrollTop;
  const scrolled = y > 2;
  if (scrolled !== (lastY > 2)) {
    header && header.classList.toggle('scrolled', scrolled);
  }
  lastY = y;
};

window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Expandable details toggles for cards
document.addEventListener('click', (e) => {
  const target = e.target;
  if (target instanceof Element && target.matches('[data-toggle="details"]')) {
    e.preventDefault();
    const card = target.closest('.card');
    if (!card) return;
    const details = card.querySelector('.card-details');
    if (!details) return;
    const isOpen = details.classList.toggle('open');
    details.toggleAttribute('hidden', !isOpen);
    target.setAttribute('aria-expanded', String(isOpen));
    target.textContent = isOpen ? 'Ver menos' : 'Ver más';
  }
});
