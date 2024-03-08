let url = new URLSearchParams(location.search)
let product_id = url.get('id')

fetch(`https://striveschool-api.herokuapp.com/api/product/${product_id}`, {
    method: 'GET',
    headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZDk5NzJkN2IxMTAwMTkwZTZkZTciLCJpYXQiOjE3MDk4ODk5NDMsImV4cCI6MTcxMTA5OTU0M30.KwFldVekQ_wwQFUgscr-qK496aNpdLbE-128XM9R1ak",
        "Content-type": "application/json"
    }

})

    .then(res => res.json())
    .then(product => {

        let name = document.querySelector('#name')
        let brand = document.querySelector('#brand')
        let price = document.querySelector('#price')
        let imageUrl = document.querySelector('#img-url')
        let description = document.querySelector('#description')

        name.value = product.name
        brand.value = product.brand
        price.value = product.price
        imageUrl.value = product.imageUrl
        description.value = product.description

    })


let salvaBtn = document.querySelector('#salva-btn')

salvaBtn.addEventListener('click', (e) => {
    e.preventDefault()

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

    fetch(`https://striveschool-api.herokuapp.com/api/product/${prodotto.product_id}`, {
        method: 'PUT',
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZDk5NzJkN2IxMTAwMTkwZTZkZTciLCJpYXQiOjE3MDk4ODk5NDMsImV4cCI6MTcxMTA5OTU0M30.KwFldVekQ_wwQFUgscr-qK496aNpdLbE-128XM9R1ak",
            'Content-type': 'application/json'
        },
        body: JSON.stringify(prodotto),
    })
        .then(res => res.json())
        .then(res => {
            location.href = 'index.html'
        })
})




let deleteBtn = document.querySelector('#delete-btn')

deleteBtn.addEventListener('click', (e) => {
    e.preventDefault()

    let name = document.querySelector('#name').value
    let brand = document.querySelector('#brand').value
    let price = document.querySelector('#price').value
    let imageUrl = document.querySelector('#img-url').value
    let description = document.querySelector('#description').value

    let prodottoEliminato = {
        name,
        description,
        brand,
        imageUrl,
        price

    }

    fetch(`https://striveschool-api.herokuapp.com/api/product/${prodottoEliminato.product_id}`, {
        method: 'DELETE',
        headers: {
    
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZDk5NzJkN2IxMTAwMTkwZTZkZTciLCJpYXQiOjE3MDk4ODk5NDMsImV4cCI6MTcxMTA5OTU0M30.KwFldVekQ_wwQFUgscr-qK496aNpdLbE-128XM9R1ak",
            'Content-Type': 'application/json'
        },
    
        body:JSON.stringify(prodottoEliminato),
    })
        .then(res => res.json())
        .then(res => {
            localStorage = 'index.html'
        })
})
