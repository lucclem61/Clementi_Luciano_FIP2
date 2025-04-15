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
  15% {transform: translateX(-7%) rotate(-7deg); /* Increase rotation degree */}
  30% {transform: translateX(5%) rotate(5deg); /* Increase rotation degree */}
  45% {transform: translateX(-5%) rotate(-5deg); /* Increase rotation degree */}
  60% {transform: translateX(3%) rotate(3deg); /* Increase rotation degree */}
  75% {transform: translateX(-2%) rotate(-2deg); /* Increase rotation degree */}
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
})();

