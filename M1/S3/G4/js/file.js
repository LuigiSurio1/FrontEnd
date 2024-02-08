function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  function generaNumeriTombola() {
    const numeri = [];
    for (let i = 1; i <= 90; i++) {
      numeri.push(i);
    }
    return numeri;
  }


  function riempiTabellone() {
    const tabellone = document.getElementById("tabellone");
    const numeri = generaNumeriTombola();

    for (let i = 0; i < 5; i++) { 
      for (let j = 0; j < 18; j++) { 
        const cella = document.createElement("div");
        const numero = numeri.pop();
        cella.textContent = numero;
        cella.classList.add('cella');
        tabellone.appendChild(cella);
      }
    }
  }

  function riempiTabellinaGiocatore() {
    const tabellinaGiocatore = document.getElementById("tabellinaGiocatore");
    const numeri = generaNumeriTombola();

    for (let i = 0; i < 24; i++) { 
      const cella = document.createElement("div");
      const numero = numeri.pop();
      cella.textContent = numero;
      cella.classList.add("cella");
      tabellinaGiocatore.appendChild(cella);
    }
  }

  function estraiNumero() {
    const numeriTabellone = document.querySelectorAll("#tabellone .cella");
    const numeriEstratti = document.querySelectorAll('#tabellone .estratto');

    if (numeriEstratti.length >= numeriTabellone.length) {
      alert("Tutti i numeri sono stati estratti!");
      return;
    }
    let numeroCasuale;
    do {
      numeroCasuale = getRandomNumber(1, 90);
    } while (Array.from(numeriEstratti).some(cella => cella.textContent == numeroCasuale));

   
    const cellaTabellone = Array.from(numeriTabellone).find(cella => cella.textContent == numeroCasuale);
    cellaTabellone.classList.add('estratto');
  }

  function inizializzaPartita() {
    document.getElementById("tabellone").innerHTML = "";
    document.getElementById("tabellinaGiocatore").innerHTML = "";

  
    riempiTabellone();
    riempiTabellinaGiocatore();

    
    const numeroTabelline = parseInt(document.getElementById("numeroTabelline").value) || 1;
    for (let i = 1; i < numeroTabelline; i++) {
      riempiTabellinaGiocatore(); 
    }

    const celleGiocatore = document.querySelectorAll("#tabellinaGiocatore .cella");
    celleGiocatore.forEach(cella => {
      cella.addEventListener("click", function () {
        cella.classList.toggle("estratto");
      });
    });
  }


  riempiTabellone();