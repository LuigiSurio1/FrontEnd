function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  function generaNumeriTombola() {
    const numeri = [];
    for (let i = 1; i <= 76; i++) {
      numeri.push(i);
    }
    return numeri;
  }


  function riempiTabellone() {
    const tabellone = document.getElementById("tabellone");
    const numeri = generaNumeriTombola();

    for (let i = 0; i < 8; i++) { 
      const riga = document.createElement("tr");
      for (let j = 0; j < 10; j++) { 
        const cella = document.createElement("td");
        const numero = numeri.pop();
        cella.textContent = numero;
        riga.appendChild(cella);
      }
      tabellone.appendChild(riga);
    }
  }

  function estraiNumero() {
    const numeriEstratti = document.querySelectorAll('.estratto');
    numeriEstratti.forEach(cella => {
      cella.classList.remove('estratto');
    });

    const numeroCasuale = getRandomNumber(1, 76);
    const celleTabellone = document.querySelectorAll("#tabellone td");
    for (const cella of celleTabellone) {
      if (cella.textContent == numeroCasuale) {
        cella.classList.add('estratto');
        break;
      }
    }
  }

  const numeriEstratti = [];

  function estraiNumero() {
    const numeriDisponibili = generaNumeriTombola().filter(numero => !numeriEstratti.includes(numero));

    if (numeriDisponibili.length === 0) {
      alert("Tutti i numeri sono stati estratti!");
      return;
    }

    const numeroCasuale = numeriDisponibili[getRandomNumber(0, numeriDisponibili.length - 1)];
    numeriEstratti.push(numeroCasuale);

    const celleTabellone = document.querySelectorAll("#tabellone td");
    for (const cella of celleTabellone) {
      if (cella.textContent == numeroCasuale) {
        cella.classList.add('estratto');
        break;
      }
    }
  }


  riempiTabellone();