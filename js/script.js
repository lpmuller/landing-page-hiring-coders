const form = document.getElementById('form');

form.addEventListener('submit',(e) => {
    e.preventDefault();
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let dados = {
        nome,
        email,
    }
    let conversaoDados = JSON.stringify(dados);
    localStorage.setItem('lead', conversaoDados);

    let conteudoForm = document.getElementById('form-content');
    conteudoForm.innerHTML = "<b>Pronto! Bem-vinde ao mundo da dança!</b>"
});
