const fallingHeartsContainer = document.querySelector('.falling-hearts');

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = `${Math.random() * 100}vw`; // Gera uma posição aleatória horizontal
  heart.style.animationDuration = `${Math.random() * 3 + 2}s`; // Tempo de queda aleatório
  fallingHeartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove(); // Remove o coração após a animação terminar
  }, 5000); // Tempo de duração da animação
}

// Cria corações a cada 300ms
setInterval(createHeart, 300);
