document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const menuItems = document.querySelector('.menu-items');

    menuIcon.addEventListener('click', function () {
        if (menuItems.style.display === 'flex') {
            menuItems.style.display = 'none';
        } else {
            menuItems.style.display = 'flex';
        }
    });
});

// ------nome

const nomeJson = localStorage.getItem('usuarioLogado');
const infos_usuario = JSON.parse(nomeJson);

const subtituloImp = document.querySelector('.subtituloImp');

subtituloImp.textContent += infos_usuario.nome;

// alerta trocar conta

const trocarconta = document.getElementById('trocarconta');

trocarconta.addEventListener('click', function(){
    Swal.fire({
        title: "Você quer trocar de conta mesmo?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Sim",
        denyButtonText: `Não`
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            window.location.href = "login.html";
        } else if (result.isDenied) {
          
        }
      });
})