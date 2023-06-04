function listArtists() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:8000/api/artists', true);

    xhr.onload = function() {
        if (xhr.status === 200) {
            var dados = JSON.parse(xhr.responseText);
            exibirDados(dados);
        }
    };

    xhr.send();
}

function exibirDados(dados) {
    var dadosDiv = document.getElementById('dados-api');
    dadosDiv.innerHTML = JSON.stringify(dados);
}

window.onload = listArtists;

function criarDivSlide(dados) {
    var swiperWrapper = document.getElementById('swiper-wrapper');

    dados.forEach(function (item) {
        var swiperSlide = document.createElement('div');
        swiperSlide.classList.add('swiper-slide');

        var imgBox = document.createElement('div');
        imgBox.classList.add('img_box');

        var img = document.createElement('img');
        img.src = item.imagem;
        img.alt = item.artista;

        imgBox.appendChild(img);

        var textBox = document.createElement('div');
        textBox.classList.add('text_box');

        var artistName = document.createElement('p');
        artistName.classList.add('artist-name');
        artistName.textContent = item.artista;

        var realName = document.createElement('p');
        realName.classList.add('real-name');
        realName.textContent = item.nomeReal;

        textBox.appendChild(artistName);
        textBox.appendChild(realName);

        swiperSlide.appendChild(imgBox);
        swiperSlide.appendChild(textBox);

        swiperWrapper.appendChild(swiperSlide);
    });
}