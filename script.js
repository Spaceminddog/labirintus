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

  function showNextReview() {
    if (isAnimating) return;
    isAnimating = true;

    const currentContainer = reviewContainers[currentIndex];
    currentIndex = (currentIndex + 1) % reviewContainers.length;
    const nextContainer = reviewContainers[currentIndex];

    // Start exit animation
    currentContainer.classList.add('slide-out');
    dots[currentIndex === 0 ? reviewContainers.length - 1 : currentIndex - 1].classList.remove('active');

    // After exit animation, switch containers
    setTimeout(() => {
      currentContainer.classList.remove('active');
      nextContainer.classList.add('active');
      dots[currentIndex].classList.add('active');

      // Reset animation state
      setTimeout(() => {
        currentContainer.classList.remove('slide-out');
        isAnimating = false;
      }, 500);
    }, 500);
  }

  // Add click handlers to dots
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      if (index === currentIndex || isAnimating) return;
      isAnimating = true;

      const currentContainer = reviewContainers[currentIndex];
      const nextContainer = reviewContainers[index];

      // Start exit animation
      currentContainer.classList.add('slide-out');
      dots[currentIndex].classList.remove('active');

      // After exit animation, switch containers
      setTimeout(() => {
        currentContainer.classList.remove('active');
        nextContainer.classList.add('active');
        dots[index].classList.add('active');

        // Reset animation state
        setTimeout(() => {
          currentContainer.classList.remove('slide-out');
          isAnimating = false;
        }, 500);
      }, 500);

      currentIndex = index;
    });
  });

  // Change review every 10 seconds
  setInterval(showNextReview, 10000);
});

// FAQ toggle functionality
function toggleFaq(element) {
  const container = element.parentElement;
  container.classList.toggle('active');
}
