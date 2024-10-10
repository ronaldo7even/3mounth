onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };

  document.addEventListener("DOMContentLoaded", function () {
    const fadeButton = document.getElementById("fadeButton");
  
    // Espera um tempo para simular a animação das flores (substitua 3000 por seu tempo de animação)
    setTimeout(() => {
      fadeButton.classList.add("show"); // Adiciona a classe para fazer o fade-in
    }, 3000); // Tempo em milissegundos até o botão aparecer
  });
  