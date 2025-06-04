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
  let isAnimating = false;
  const ANIMATION_DURATION = 500;

  function updateActiveReview(newIndex) {
    if (isAnimating || newIndex === currentIndex) return;
    isAnimating = true;

    // Remove active classes
    reviewContainers[currentIndex].classList.remove('active');
    dots[currentIndex].classList.remove('active');

    // Add active classes to new elements
    currentIndex = newIndex;
    reviewContainers[currentIndex].classList.add('active');
    dots[currentIndex].classList.add('active');

    // Reset animation state after animation completes
    setTimeout(() => {
      isAnimating = false;
    }, ANIMATION_DURATION);
  }

  // Add click handlers to dots
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => updateActiveReview(index));
  });

  // Auto-advance reviews
  function autoAdvance() {
    const nextIndex = (currentIndex + 1) % reviewContainers.length;
    updateActiveReview(nextIndex);
  }

  // Change review every 10 seconds
  setInterval(autoAdvance, 10000);
});

// FAQ toggle functionality
function toggleFaq(element) {
  const container = element.parentElement;
  container.classList.toggle('active');
}
