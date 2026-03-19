const campoSenha = document.getElementById('campoSenha');
const btnOlho = document.getElementById('btnOlho');
const iconeAberto = document.getElementById('iconeAberto');
const iconeFechado = document.getElementById('iconeFechado');
const btnTema = document.getElementById('btnTema');
const iconeSol = document.getElementById('iconeSol');
const iconeLua = document.getElementById('iconeLua');
const htmlElement = document.documentElement;

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

const meuRange = document.getElementById('meuRange');
const valorRange = document.getElementById('valorRange');

meuRange.addEventListener('input', () => {
    valorRange.textContent = meuRange.value;
});