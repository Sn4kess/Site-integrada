window.onload = () => {
  // Seleciona todos os elementos <a> da página
  const anchors = document.querySelectorAll('a');
  
  // Seleciona o elemento com a classe 'transição' (usado para transição visual)
  const transition_el = document.querySelector('.transição');

  // Após 500ms, remove a classe 'is-active' do elemento de transição para ocultá-lo
  setTimeout(() => {
    transition_el.classList.remove('is-active');
  }, 500);

  // Adiciona um evento de clique para cada link da página
  for (let i = 0; i < anchors.length; i++) {
    const anchor = anchors[i];

    // Quando um link é clicado, o comportamento padrão de navegação é prevenido
    anchor.addEventListener('click', e => {
      e.preventDefault(); // Impede a navegação normal ao clicar no link
      let target = e.target.href; // Obtém o destino do link (href)

      // Loga o estado do elemento de transição para depuração
      console.log(transition_el);

      // Adiciona a classe 'is-active' ao elemento de transição, fazendo-o aparecer
      transition_el.classList.add('is-active');

      // Loga o estado do elemento de transição após a classe ser adicionada
      console.log(transition_el);

      // Após 500ms, redireciona o navegador para o destino do link
      setInterval(() => {
        window.location.href = target; // Navega para o destino do link
      }, 500); // O redirecionamento ocorre após 500ms
    });
  }
}
