const Calculate = async (value, currency) => {
    let str = ""
    let url = `https://api.currencyapi.com/v3/latest?apikey=cur_live_KMdyRi6PTxlQzGy3IJOOcsW9vxjIrLtFnqVlarDD&base-currency=`+ currency ;
    let responce = await fetch(url)
    let data = await responce.json()
    document.querySelector('.table').style.display = "block"
    for (let key of Object.keys(data['data'])) {
        let val = data['data'][key]['value'] * value;
        str += `
            <tr>
                <td>${key}</td>
                <td>${data['data'][key]['code']}</td>
                <td>${val.toFixed(2)}</td>
            </tr>
        `
    }
    let tbody = document.querySelector('tbody')
    tbody.innerHTML = str;

}


let btn = document.querySelector('button')


btn.addEventListener('click', (e) => {
    e.preventDefault()
    let quantity = parseInt(document.getElementById('quantity').value)
    let currency = document.getElementById('currency').value
    Calculate(quantity, currency);
})


