// Find elements
const image = document.querySelector('.story-image img');
const caption = document.querySelector('#story-caption');

// Story content
const captions = [
  "Initial caption",
  "While his knees were still weak, his drive for adventure was strong.",
  "He looked into the deep water, seeing a reflection of his dreams.",
  "The man found a boat and set sail, embracing the unknown with courage.",
  "He sailed towards the red horizon, where new adventures awaited."
];

// Track current step
let currentStep = 0;

// Listen for clicks
image.addEventListener('click', function() {
  currentStep++;

  if (currentStep < captions.length) {
    // Update caption
    caption.textContent = captions[currentStep];

    // Update image
    image.src = `assets/image-${currentStep + 1}.jpg`;

    // Update progress dots
    updateProgress(currentStep);

    console.log('Image clicked, currentStep:', currentStep);
  }
});

function updateProgress(step) {
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, index) => {
    if (index <= step) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}
