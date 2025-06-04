function handlePrimaryClick() {
  // Add your primary button click handler here
}

function handleSecondaryClick() {
  // Add your secondary button click handler here
}

// Review carousel functionality
document.addEventListener('DOMContentLoaded', function() {
  // Get all review containers and dots
  const reviewContainers = document.querySelectorAll('.review-container');
  const dots = document.querySelectorAll('.dot');
  let currentIndex = 0;

  // Function to show a specific review and update dots
  function showReview(index) {
    // Hide all reviews
    reviewContainers.forEach(container => {
      container.style.display = 'none';
    });
    // Remove active class from all dots
    dots.forEach(dot => {
      dot.classList.remove('active');
    });

    // Show the selected review and activate its dot
    reviewContainers[index].style.display = 'block';
    dots[index].classList.add('active');
  }

  // Function to advance to the next review
  function nextReview() {
    currentIndex = (currentIndex + 1) % reviewContainers.length;
    showReview(currentIndex);
  }

  // Add click handlers to dots
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentIndex = index;
      showReview(currentIndex);
    });
  });

  // Show first review immediately when page loads
  showReview(0);

  // Auto-advance reviews every 10 seconds
  setInterval(nextReview, 10000);
});

// FAQ toggle functionality
function toggleFaq(element) {
  const container = element.parentElement;
  container.classList.toggle('active');
}
