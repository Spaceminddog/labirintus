function handlePrimaryClick() {
  // Add your primary button click handler here
}

function handleSecondaryClick() {
  // Add your secondary button click handler here
}

// Review carousel functionality
document.addEventListener('DOMContentLoaded', function() {
  const reviewContainers = document.querySelectorAll('.review-container');
  const dots = document.querySelectorAll('.dot');
  let currentIndex = 0;

  function showReview(index) {
    // Remove active class from all reviews and dots
    reviewContainers.forEach(container => {
      container.classList.remove('active');
      container.classList.remove('slide-out');
    });
    dots.forEach(dot => dot.classList.remove('active'));

    // Add active class to current review and dot
    reviewContainers[index].classList.add('active');
    dots[index].classList.add('active');
  }

  // Add click handlers to dots
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      if (index === currentIndex) return;
      currentIndex = index;
      showReview(currentIndex);
    });
  });

  // Initialize first review
  showReview(0);

  // Change review every 10 seconds
  setInterval(() => {
    currentIndex = (currentIndex + 1) % reviewContainers.length;
    showReview(currentIndex);
  }, 10000);
});

// FAQ toggle functionality
function toggleFaq(element) {
  const container = element.parentElement;
  container.classList.toggle('active');
}
