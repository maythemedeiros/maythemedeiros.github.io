const form = document.querySelector('form');
const nome = document.querySelector('#nome');
const email = document.querySelector('#email');
const confirmaEmail = document.querySelector('#confirma_email');
const dataNascimento = document.querySelector('#data_nascimento');
const telefone = document.querySelector('#telefone');
const peso = document.querySelector('#peso');
const altura = document.querySelector('#altura');
const materias = document.querySelectorAll('input[name="materias[]"]');
const sexo = document.querySelector('input[name="sexo"]:checked');
const serie = document.querySelector('#serie');

// Validação via JS
nome.addEventListener('input', function() {
  if (nome.value.length < 3) {
    nome.setCustomValidity('O nome deve ter no mínimo 3 caracteres');
  } else {
    nome.setCustomValidity('');
  }
});

email.addEventListener('input', function() {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!regex.test(email.value)) {
    email.setCustomValidity('Por favor, insira um email válido');
  } else {
    email.setCustomValidity('');
  }
});

confirmaEmail.addEventListener('input', function() {
  if (confirmaEmail.value !== email.value) {
    confirmaEmail.setCustomValidity('Os emails não conferem');
  } else {
    confirmaEmail.setCustomValidity('');
  }
});

telefone.addEventListener('input', function() {
  const regex = /^\([0-9]{2}\) [0-9]{4,5}-[0-9]{4}$/;
  if (!regex.test(telefone.value)) {
    telefone.setCustomValidity('Por favor, insira um telefone válido no formato (12) 3456-7890');
  } else {
    telefone.setCustomValidity('');
  }
});

form.addEventListener('submit', function(event) {
  if (peso.value <= 0 || altura.value <= 0) {
    event.preventDefault();
    peso.setCustomValidity('Por favor, insira um peso e altura válidos');
    altura.setCustomValidity('Por favor, insira um peso e altura válidos');
  } else {
    peso.setCustomValidity('');
    altura.setCustomValidity('');
  }
});

// Validação via HTML
nome.required = true;
email.required = true;
confirmaEmail.required = true;
dataNascimento.required = true;
telefone.required = true;
serie.required = true;

// Máscara para telefone
telefone.addEventListener('input', function() {
  const input = telefone.value.replace(/\D/g, '');
  const valor = input.replace(/(\d{2})(\d)/, '($1) $2');
  const tamanho = valor.length;
  if (tamanho === 10) {
    telefone.value = valor.replace(/(\d{5})(\d{4})/, '$1-$2');
  } else if (tamanho === 9) {
    telefone.value = valor.replace(/(\d{4})(\d{4})/, '$1-$2');
  } else if (tamanho <= 8) {
    telefone.value = valor;
  }
});

// Função anônima para validar checkbox
materias.forEach(item => {
  item.addEventListener('input', function() {
    const checked = Array.from(materias).filter(materia => materia.checked).length;
    if (checked < 3) {
      item.setCustomValidity('Por favor, selecione no mínimo 3 materias');
    } else {
      item.setCustomValidity('');
    }});
});