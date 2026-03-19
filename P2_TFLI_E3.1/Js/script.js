const campoSenha = document.getElementById('campoSenha');
const btnOlho = document.getElementById('btnOlho');
const iconeAberto = document.getElementById('iconeAberto');
const iconeFechado = document.getElementById('iconeFechado');
const btnTema = document.getElementById('btnTema');
const iconeSol = document.getElementById('iconeSol');
const iconeLua = document.getElementById('iconeLua');
const htmlElement = document.documentElement;

// --- Tema ---
const temaPreferido = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
htmlElement.setAttribute('data-theme', temaPreferido);

if (temaPreferido === 'dark') {
    iconeSol.style.display = 'block';
    iconeLua.style.display = 'none';
} else {
    iconeSol.style.display = 'none';
    iconeLua.style.display = 'block';
}

btnTema.addEventListener('click', () => {
    const temaAtual = htmlElement.getAttribute('data-theme');
    
    if (temaAtual === 'dark') {
        htmlElement.setAttribute('data-theme', 'light');
        iconeSol.style.display = 'none';
        iconeLua.style.display = 'block';
    } else {
        htmlElement.setAttribute('data-theme', 'dark');
        iconeSol.style.display = 'block';
        iconeLua.style.display = 'none';
    }
});

// --- Botão Olho ---
btnOlho.addEventListener('click', () => {
    if (campoSenha.type === 'password') {
        campoSenha.type = 'text';
        btnOlho.setAttribute('aria-label', 'Ocultar senha');
        iconeAberto.style.display = 'none';
        iconeFechado.style.display = 'block';
    } else {
        campoSenha.type = 'password';
        btnOlho.setAttribute('aria-label', 'Mostrar senha');
        iconeAberto.style.display = 'block';
        iconeFechado.style.display = 'none';
    }
});

// --- Validação do Formulário ---
const formLogin = document.getElementById('formLogin');
const campoEmail = document.getElementById('campoEmail');
const erroEmail = document.getElementById('erroEmail');
const erroSenha = document.getElementById('erroSenha');

formLogin.addEventListener('submit', (evento) => {
    // Evita que a página recarregue
    evento.preventDefault();
    
    let formularioValido = true;
    
    // Expressão regular (Regex) para validar o formato de e-mail
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Validação do E-mail
    if (!regexEmail.test(campoEmail.value)) {
        erroEmail.textContent = 'Insira um e-mail válido.';
        erroEmail.classList.add('ativo');
        campoEmail.classList.add('invalido');
        formularioValido = false;
    } else {
        erroEmail.classList.remove('ativo');
        campoEmail.classList.remove('invalido');
    }
    
    if (campoSenha.value.length < 6) {
        erroSenha.textContent = 'A senha deve ter no mínimo 6 caracteres.';
        erroSenha.classList.add('ativo');
        campoSenha.classList.add('invalido');
        formularioValido = false;
    } else {
        erroSenha.classList.remove('ativo');
        campoSenha.classList.remove('invalido');
    }
    
    // Se tudo estiver correto, processa o login
    if (formularioValido) {
        alert('Formulário válido! Login sendo processado...');
    }
});

// --- Exercício 2: Range ---
const meuRange = document.getElementById('meuRange');
const valorRange = document.getElementById('valorRange');

meuRange.addEventListener('input', () => {
    valorRange.textContent = meuRange.value;
});