document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // impede o envio automático
  
      const username = document.querySelector('#username').value.trim();
      const email = document.querySelector('#email').value.trim();
      const password = document.querySelector('#password').value.trim();
  
      let mensagensErro = [];
  
      if (username === '') {
        mensagensErro.push('Nome de usuário');
      }
      if (email === '') {
        mensagensErro.push('E-mail');
      }
      if (password === '') {
        mensagensErro.push('Senha');
      }
  
      if (mensagensErro.length > 0) {
        alert('Preencha os seguintes campos: ' + mensagensErro.join(', '));
        return; // não continua
      }
  
      const dadosUsuario = {
        nome: username,
        email: email,
        senha: password
      };
  
      console.log('Dados em JSON:', JSON.stringify(dadosUsuario));
      alert('Cadastro realizado com sucesso!');
    });
  });
  