// script.js

window.onload = function() {
    setTimeout(function() {
        document.querySelector('.message-container').style.display = 'block';
        document.querySelector('.button-container').style.display = 'block';
    }, 10000); // Tempo em milissegundos antes de mostrar a mensagem e o botão
};
