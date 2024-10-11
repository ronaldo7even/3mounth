<<<<<<< HEAD
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * 100 + 'vw'; // Define a posição horizontal aleatória
    heart.style.animationDuration = Math.random() * 2 + 3 + 's'; // Dura entre 3 a 5 segundos
  
    document.querySelector('.falling-hearts').appendChild(heart);
  
    // Remove o coração do DOM após a animação
    heart.addEventListener('animationend', () => {
      heart.remove();
    });
  }
  
  setInterval(createHeart, 300); // Cria um novo coração a cada 300ms
  
=======
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
>>>>>>> bc63a303449e5c7819a2885bb760b3564996138f
