/*  botão SOBRE O SITE */

/*  EVENTO DE CLIQUE DO BOTÃO */
document.getElementById('botãoinfo').addEventListener('click', function () {

    /*  ABRE A CAIXA */
    document.getElementById('caixa').classList.add('mostrar');  // Adiciona a classe 'mostrar' ao elemento com id 'caixa', provavelmente para exibi-lo
});


/*  BOTÃO DE FECHAR DENTRO DA CAIXA */
document.getElementById('fechar').addEventListener('click', function () {
    /*  FECHA A CAIXA */
    document.getElementById('caixa').classList.remove('mostrar');  // Remove a classe 'mostrar' do elemento com id 'caixa', provavelmente para ocultá-lo
});
