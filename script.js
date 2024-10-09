//-----------------------------------------MENU ICON----------------------------------------

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


const play_button = document.querySelector("#play-button");
const cardsContainer = document.getElementById("cards");
var isTurned = false;
var mostraNoticias = 1;


var url = 'https://newsapi.org/v2/everything?' +
    'language=pt&' +
    'category=politics&' +
    'q=pol%C3%ADtica+AND+brasileira&' +
    'apiKey=c9795c2164cd4a20b71dab2133967a63';
var req = new Request(url);

async function getNews() {
    const url = `https://newsapi.org/v2/everything?language=pt&q=pol%C3%ADtica+AND+brasileira&sortBy=publishedAt&apiKey=c9795c2164cd4a20b71dab2133967a63`;

    function fetchNews(url) {
        return fetch(url)
            .then(res => res.json())
    }

    fetchNews(url)
        .then((response) => {
            const news = response.articles;
            console.log(news);

            cardsContainer.innerHTML = '';

            //-----------------------NEWS E AUDIO--------------------------

            for (let i = 0; i < 10; i++) {
                const titleNews = news[i].title;
                console.log(titleNews);
            

                const synth = window.speechSynthesis;
                const voice = synth.getVoices();
                const html = document.getElementById('audio');


                var utter = new SpeechSynthesisUtterance(titleNews);
                utter.voice = voice[0];

                // criar audio aqui para o bd com datetime

                synth.speak(utter);
                console.log(isTurned)
                

                if (isTurned) {
                    synth.resume();
                    
                } else {
                    synth.pause();
                }

                //---------------------CARDS------------------------------

                if (news[i].title) {
                    let card = document.createElement("div");
                    card.setAttribute("id", "card");
                    let titulo = document.createElement("h1");
                    let link = document.createElement("a");
                    let favorito = document.createElement("p");
                    
                    link.setAttribute("href", news[i].url);
                    link.setAttribute("target", "_blank"); 
                    favorito.setAttribute("onclick", "favoritarNoticia('"+news[i].title+"','"+news[i].url+"')")

                    titulo.textContent = news[i].title;
                    link.textContent = "Leia mais";
                    favorito.textContent = "Favoritar";

                    
                    card.appendChild(titulo);
                    card.appendChild(link);
                    card.appendChild(favorito);
    
                    cardsContainer.appendChild(card);
                } else{

                }
            }
                
            

        });
};

//-----------------------------------------BOTAO PLAY E PAUSE----------------------------------------

const body = document.querySelector('body');
const sobre = document.querySelector('.sobre-button');

play_button.addEventListener('click', function () {
    isTurned = !isTurned;
    if (isTurned) {
        play_button.innerHTML = '<img src="img/pause.png" alt="Pause" style="width: 2.5vw; height: 5vh;">';
        body.style.height = 'auto';
        sobre.style.padding = '3% 7%';
    } else {
        play_button.innerHTML = '<img src="img/play.png" alt="Play" style="width: 2.5vw; height: 5vh;">';
    }
    getNews();
});

//-----------------------------------------FAVORITAR----------------------------------------

async function favoritarNoticia(titulo, link){
    let idUsuario = JSON.parse(localStorage.getItem("usuarioLogado")); 
    idUsuario = idUsuario.id

    
    let data = {idUsuario, titulo, link}
 
    const response = await fetch('http://localhost:3000/api/favorite', {
        method: "POST",
        headers: {"Content-type": "application/json;charset=UTF-8"},
        body: JSON.stringify(data)
    });
 
    let content = await response.json();
 
    console.log(content);
 
    if(content.success) {
       alert("Favoritado com sucesso")
    } else {
        alert(content.message);
    }
}