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

        let description = document.querySelector('#description')

        description.value = product.description

    })
