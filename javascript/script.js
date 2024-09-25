// Função para criar estrelas
function criarEstrelas() {
    const starsContainer = document.querySelector('.stars');
    for (let i = 0; i < 100; i++) { 
        const star = document.createElement('div');
        star.classList.add('star');
        const size = Math.random() * 3 + 1; 
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.top = `${Math.random() * 100}vh`; 
        star.style.left = `${Math.random() * 100}vw`; 
        starsContainer.appendChild(star);
    }
}

// Chama a função para criar as estrelas
criarEstrelas();

// Funções de operações matemáticas
function calcular(op) {
    const n1 = parseFloat(document.getElementById('n1').value);
    const n2 = parseFloat(document.getElementById('n2').value);
    let resultado;

    switch (op) {
        case 'soma':
            resultado = n1 + n2;
            break;
        case 'subtracao':
            resultado = n1 - n2;
            break;
        case 'multiplicacao':
            resultado = n1 * n2;
            break;
        case 'divisao':
            if (n2 === 0) {
                resultado = "Erro: Divisão por zero";
            } else {
                resultado = n1 / n2;
            }
            break;
    }

    $('#resultado').text(resultado); 
    gsap.fromTo('#resultado', {scale: 0}, {scale: 1, duration: 0.5}); // Animação do resultado
}

// Usando jQuery para adicionar eventos de clique
$(document).ready(function() {
    $('#btnSomar').click(function() {
        calcular('soma');
    });
    $('#btnSubtrair').click(function() {
        calcular('subtracao');
    });
    $('#btnMultiplicar').click(function() {
        calcular('multiplicacao');
    });
    $('#btnDividir').click(function() {
        calcular('divisao');
    });
});
