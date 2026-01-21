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

let currentStep = 0;

image.addEventListener('click', function() {
  currentStep++;

  if (currentStep < captions.length) {

    caption.textContent = captions[currentStep];

    image.src = `assets/image-${currentStep + 1}.jpg`;

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
