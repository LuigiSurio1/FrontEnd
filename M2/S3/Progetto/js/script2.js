
let salvaBtn = document.querySelector('#salva-btn')

salvaBtn.addEventListener('click', () => {
    let name = document.querySelector('#name').value
    let brand = document.querySelector('#brand').value
    let price = document.querySelector('#price').value
    let imageUrl = document.querySelector('#img-url').value
    let description = document.querySelector('#description').value

    let prodotto = {
        name,
        description,
        brand,
        imageUrl,
        price
        
    }

    fetch("https://striveschool-api.herokuapp.com/api/product/", {
        method: "POST",
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZDk5NzJkN2IxMTAwMTkwZTZkZTciLCJpYXQiOjE3MDk4ODk5NDMsImV4cCI6MTcxMTA5OTU0M30.KwFldVekQ_wwQFUgscr-qK496aNpdLbE-128XM9R1ak",
            "Content-type": "application/json"
                },
                body:JSON.stringify(prodotto)
            })
            .then(res => res.json())
            .then(res => {
                location.href = 'index.html'
            })
})