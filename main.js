
// Executa o evento devicelight
window.addEventListener('devicelight', function(event) {

  // Criei minhas variáveis
  var luzAmbiente = event.value;
  var element = document.getElementById('unibratec');

  // Condições || Onde começa a mágica
  // Se a iluminação for menor ou igual a 10
  if (luzAmbiente <= 10) {

    // Adiciona uma classe ao body e h1
    document.body.classList.add('bg-preto');
    element.classList.add("nome-branco");

  } else {

    // Remove uma classe do body
    document.body.classList.remove('bg-preto');
    element.classList.remove("nome-branco");
  }
})

// Fonte: http://loopinfinito.com.br/2013/07/30/ambient-light-events/
