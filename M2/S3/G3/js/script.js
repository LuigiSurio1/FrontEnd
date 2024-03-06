async function fetchBooks() {
    try {
        const risposta = await fetch('https://striveschool-api.herokuapp.com/books');
        const libri = await risposta.json();
        displayBooks(libri);
    } catch (errore) {
        console.error('Errore nel caricamento', errore);
    }
}

function displayBooks(libri) {
    const listaLibri = document.getElementById('libreria');

    libri.forEach(libro => {
        const card = createBookCard(libro);
        listaLibri.appendChild(card);
    });
}

function createBookCard(libro) {
    const card = document.createElement('div');
    card.classList.add('col-md-3');
    card.innerHTML = `
        <div class="card">
            <img src="${libro.img}" class="card-img-top" alt="${libro.title}">
            <div class="card-body">
                <h3 class="card-title">${libro.title}</h3>
                <p class="card-text">Prezzo: ${libro.price}$</p>
                <button class="btn btn-danger" onclick="discardBook(this)">Scarta</button>
            </div>
        </div>
    `;
    return card;
}

function discardBook(button) {
    const card = button.closest('.card');
    card.remove();
}

window.onload = fetchBooks;