const form = document.getElementById('form-enviar');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const campoA = document.getElementById('campoA');
    const campoB = document.getElementById('campoB');

    const valorA = parseFloat(campoA.value);
    const valorB = parseFloat(campoB.value);

    if (isNaN(valorA) || isNaN(valorB)) {
        alert('Por favor, insira os valores nos campos abaixo.');
        return;
    }

    const mensagemSucesso = `O valor <b>${valorB}</b> é superior ao valor <b>${valorA}</b>`;
    const mensagemFracasso = `O valor <b>${valorB}</b> não é superior ao valor <b>${valorA}</b>`;

    const containerMensagemSucesso = document.querySelector('.msg');
    const containerMensagemFracasso = document.querySelector('.negativo');

    if (valorB > valorA) {
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        containerMensagemFracasso.style.display = 'none';
    } else {
        containerMensagemFracasso.innerHTML = mensagemFracasso;
        containerMensagemFracasso.style.display = 'block';
        containerMensagemSucesso.style.display = 'none';
    }
});

console.log(form);