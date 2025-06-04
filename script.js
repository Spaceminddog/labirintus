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
    // Hide all reviews
    reviewContainers.forEach(container => {
      container.style.display = 'none';
    });
    // Remove active class from all dots
    dots.forEach(dot => {
      dot.classList.remove('active');
    });

    // Show selected review and activate corresponding dot
    reviewContainers[index].style.display = 'block';
    dots[index].classList.add('active');
  }

  // Add click handlers to dots
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentIndex = index;
      showReview(currentIndex);
    });
  });

  // Auto-advance reviews every 10 seconds
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
