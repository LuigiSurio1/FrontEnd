let myList = document.getElementsByTagName("li");
for (let i = 0; i < myList.length; i++) {
  let span = document.createElement("span");
  let txt = document.createTextNode("");
  span.className = "close";
  span.appendChild(txt);
  myList[i].appendChild(span);
}

let close = document.getElementsByClassName("close");
for ( i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
}

let list = document.querySelector('ul');
list.addEventListener('click', function(el) {
  if (el.target.tagName === 'li') {
    el.target.classList.toggle('check');
  } 
}, false);

function nuovoElemento() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("Input").value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("");
    } else {
      document.getElementById("uL").appendChild(li);
    }
    document.getElementById("Input").value = "";
  
    let span = document.createElement("span");
    let txt = document.createTextNode("x");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
      }
    }
  }


