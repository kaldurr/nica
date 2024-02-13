function showMessage(response) {
    const interactiveSection = document.querySelector('.interactive-section');
    const message = document.querySelector('.message');
  
    if (response === 'yes') {
      interactiveSection.style.display = 'none';
      message.style.display = 'block';
      message.classList.add('fadeIn');
    } else {
      teleportNoButton();
    }
  }
  
  function teleportNoButton() {
    const noButton = document.querySelector('.no-button');
    
    const newPosition = getRandomPosition();
    
    noButton.style.position = 'absolute';
    noButton.style.left = `${newPosition.x}px`;
    noButton.style.top = `${newPosition.y}px`;
  }
  
  function getRandomPosition() {
    const screenWidth = window.innerWidth - 100; // Subtract 100 to keep the button fully visible within the screen
    const screenHeight = window.innerHeight - 100;
  
    const randomX = Math.floor(Math.random() * screenWidth);
    const randomY = Math.floor(Math.random() * screenHeight);
  
    return { x: randomX, y: randomY };
  }
  
  // Reset the message and interactive section on page load
  document.addEventListener('DOMContentLoaded', function () {
    const message = document.querySelector('.message');
    const interactiveSection = document.querySelector('.interactive-section');
    message.style.display = 'none';
    interactiveSection.style.display = 'block';
  });
  