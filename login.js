document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const userInput = form.querySelector('input[type="text"]').value;
    const passwordInput = form.querySelector('input[type="password"]').value;

    if (!userInput || !passwordInput) {
      alert('Por favor, preencha todos os campos.');
    } else {
      // Aqui você pode adicionar a lógica para enviar o formulário
      alert('Formulário enviado com sucesso!');
      form.submit();
    }
  });
});
