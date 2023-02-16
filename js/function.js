console.log('connected Function');

function displayList(count, Pname, pPrice, pQuantity, pTotalPrice) {
    const tbody = document.getElementById('tablebody');
    const tr1 = document.createElement('tr');
    tr1.innerHTML = `
    <td class='countNo text-center'>${count}</td>
    <td class='pName text-center'>${Pname}</td>
    <td class='price text-center'>${pPrice}</td>
   <td class='pQuantity text-center'>${pQuantity}</td>
    <td class='pTotalPrice text-center'>${pTotalPrice}</td>
`
    tbody.appendChild(tr1);
}
function grandTotalPrice() {

// let totalcount = 0;
// for (const numbers of document.getElementsByClassName('countNo')) {
//     totalcount = parseInt(numbers.innerText) + totalcount;
// }

let totalPrice = 0
const totalPrices = document.getElementsByClassName('price')
for (const price of totalPrices) {
totalPrice = parseInt(price.innerText) + totalPrice;
}

let totalQuantity = 0
const Quantitys = document.getElementsByClassName('pQuantity')
for (const quantity of Quantitys) {
    totalQuantity = parseInt(quantity.innerText) + totalQuantity;
}

let totalgrandPrice = 0
const totals = document.getElementsByClassName('pTotalPrice')
for (const total of totals) {
    totalgrandPrice = parseInt(total.innerText) + totalgrandPrice;
}
document.getElementById('countNo').innerHTML = count;
document.getElementById('totalPrice').innerHTML = totalPrice;
document.getElementById('totalQuantity').innerHTML = totalQuantity;
document.getElementById('grandTotalPrice').innerHTML = totalgrandPrice;
document.getElementById('navpriceUpdate').innerHTML = totalgrandPrice;
}



