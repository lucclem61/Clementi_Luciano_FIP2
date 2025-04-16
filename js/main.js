(function() {
  const style = document.createElement('style');
  style.textContent =
  `.can-image {
  transition: transform 0.5s ease;
  }
 

  .can-image:hover {
  animation: wobble 1.2s infinite;
  }
 

  @keyframes wobble {
  0% {transform: translateX(0%);}
  15% {transform: translateX(-7%) rotate(-7deg);}
  30% {transform: translateX(5%) rotate(5deg);}
  45% {transform: translateX(-5%) rotate(-5deg);}
  60% {transform: translateX(3%) rotate(3deg);}
  75% {transform: translateX(-2%) rotate(-2deg);}
  100% {transform: translateX(0%);}
  }`;
 

  document.head.appendChild(style);
 

  const canImages = document.querySelectorAll('.can-image');
 

  canImages.forEach(function(img) {
  img.addEventListener('mouseover', function() {
  this.style.animation = 'wobble 0.6s infinite';
  });
 

  img.addEventListener('mouseout', function() {
  this.style.animation = '';
  });
  });
  // Lightbox
  const burpleInfoLink = document.querySelector('#burple-info-link');
  const burpleHistoryLightbox = document.querySelector('#burple-history-lightbox');
  const elements = [burpleInfoLink, burpleHistoryLightbox];
 

  burpleInfoLink.addEventListener('click', function(event) {
  event.preventDefault();
  burpleHistoryLightbox.style.display = 'block';
  });
 

  burpleHistoryLightbox.addEventListener('click', function(event) {
  if (event.target === this) {
  this.style.display = 'none';
  }
  });
 })();
 

 

 function clearPlaceholder(input) {
  input.setAttribute('data-placeholder', input.placeholder);
  input.placeholder = '';
 }
 

 function resetPlaceholder(input, placeholder) {
  input.placeholder = placeholder;
 }
 

 function createFallingText(text) {
  const container = document.querySelector('.falling-text');
  if (!container) {
  console.error('Falling text container not found!');
  return;
  }
  const span = document.createElement('span');
  span.textContent = text;
  const randomPosition = Math.random() * (window.innerWidth - 100);
  span.style.left = randomPosition + 'px';
  span.style.animationDelay = Math.random() * 2 + 's';
  container.appendChild(span);
 

  span.addEventListener('animationend', function() {
  span.remove();
  });
 }
 

 

 function handleNameInput(value) {
  if (value) {
  createFallingText("Nice to meet you!");
  }
 }