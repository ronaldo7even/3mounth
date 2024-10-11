onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };

  onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
  
      // Mostrar botão para ver fotos após a animação das flores
      const btnContainer = document.querySelector(".button-container");
      btnContainer.style.display = "block";
    }, 4000); // Exibir após 4 segundos (ajustar se necessário)
  };
  


