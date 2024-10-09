let buttonCadastroUsuario = document.getElementById("enviar-cadastro-usuario");

buttonCadastroUsuario.onclick = async function () {
    let nome = document.getElementById("input-cadastro-nome").value
    let email = document.getElementById("input-cadastro-email").value
    let senha = document.getElementById("input-cadastro-senha").value

    let dadosUsuario = { nome, email, senha };

    const response = await fetch('http://localhost:3000/store/user', {
        method: 'POST',
        headers: { 'Content-type': 'application/json;chartset=UTF-8' },
        body: JSON.stringify(dadosUsuario)
    })

    let content = await response.json();

    if (content.success) {
        alert("Sucesso")

        window.location.href = 'login.html';
    }
    else {
        alert("Erro");
    }
};