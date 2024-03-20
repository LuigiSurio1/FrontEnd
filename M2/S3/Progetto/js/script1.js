class Prodotti {
    constructor(_name, _description, _brand, _imageUrl, _price) {
        this.name = _name;
        this.description = _description;
        this.brand = _brand;
        this.imageUrl = _imageUrl;
        this.price = _price;
    }

}

let url = new URLSearchParams(location.search)
let product_id = url.get('id')

fetch(`https://striveschool-api.herokuapp.com/api/product/`, {
    method: 'GET',
    headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZDk5NzJkN2IxMTAwMTkwZTZkZTciLCJpYXQiOjE3MDk4ODk5NDMsImV4cCI6MTcxMTA5OTU0M30.KwFldVekQ_wwQFUgscr-qK496aNpdLbE-128XM9R1ak",
        "Content-type": "application/json"
    }
})
    .then(res => res.json())
    .then(products => {
        console.log(products)
        for (let product of products) {
            let card = createClone()

            let img = card.querySelector('#img')
            let name = card.querySelector('#name')
            let price = card.querySelector('#price')

            img.src = product.imageUrl
            name.innerText = product.name
            price.innerText = product.price

            document.querySelector('.row').append(card)
        };
    })

function createClone() {
    let template = document.querySelector('#card-template')
    let clone = template.content.cloneNode(true)
    return clone
}

function discardCard(button) {
    const card = button.closest('.card');
    card.remove();
}





