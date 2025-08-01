function handlePrimaryClick() {
  // Add your primary button click handler here
}

function handleSecondaryClick() {
  window.open('https://tally.so/r/mRq0O4', '_blank');
}

function handleConsultClick() {
  // Functionality removed: button now does nothing
}

// Review carousel functionality
document.addEventListener('DOMContentLoaded', function() {
  const reviews = document.querySelectorAll('.review-container');
  const dots = document.querySelectorAll('.dot');
  let currentReview = 0;

  function showReview(index) {
    // Hide all reviews
    reviews.forEach(review => review.style.display = 'none');
    // Remove active class from all dots
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Show selected review and activate its dot
    const selectedReview = document.querySelector(`.review-container[data-review="${index}"]`);
    const selectedDot = document.querySelector(`.dot[data-dot="${index}"]`);
    
    if (selectedReview && selectedDot) {
      selectedReview.style.display = 'block';
      selectedDot.classList.add('active');
    }
  }

  // Add click handlers to dots
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const index = parseInt(dot.getAttribute('data-dot'));
      currentReview = index;
      showReview(currentReview);
    });
  });

  // Show first review
  showReview(0);

  // Auto advance reviews
  setInterval(() => {
    currentReview = (currentReview + 1) % reviews.length;
    showReview(currentReview);
  }, 10000);

  // Attach consult click handler to all relevant buttons
  document.querySelectorAll('.consult-btn').forEach(btn => {
    btn.addEventListener('click', handleConsultClick);
  });

  // Popup logic
  function openPopup() {
    document.getElementById('popup-overlay').style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
  function closePopup() {
    document.getElementById('popup-overlay').style.display = 'none';
    document.body.style.overflow = '';
  }

  // Attach popup open handler to all relevant buttons
  document.querySelectorAll('.open-popup-btn').forEach(btn => {
    btn.addEventListener('click', openPopup);
  });
  // Close popup on close button
  document.getElementById('popup-close-btn').addEventListener('click', closePopup);
  // Close popup when clicking outside the form
  document.getElementById('popup-overlay').addEventListener('click', function(e) {
    if (e.target === this) closePopup();
  });
});

// FAQ toggle functionality
function toggleFaq(element) {
  const container = element.parentElement;
  container.classList.toggle('active');
}

// Responsive header menu toggle
(function() {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }
})();

window.handleConsultClick = handleConsultClick;
