let count = 0;
document.getElementById('coffeeBtn').addEventListener('click', function () {
    count += 1
    const Pname = document.getElementById('coffeePN').innerText;
    const price = parseInt(document.getElementById('coffeePrice').innerText) 
    const quantity = parseInt(document.getElementById('coffeeQuantity').innerText)
    const totalPrice = price * quantity;
    document.getElementById('productListCount').innerText = count;
    document.getElementById('navbarUpdate').innerText = count;
    document.getElementById('navbarUpdate1').innerText = count;
    displayList(count, Pname, price, quantity, totalPrice)
    document.getElementById('coffeeBtn').setAttribute('disabled', false)
    grandTotalPrice()

})
document.getElementById('heartBtn').addEventListener('click', function () {
    count += 1
    const Pname = document.getElementById('heartPN').innerText;
    const price = parseInt(document.getElementById('heartPrice').innerText) 
    const quantity = parseInt(document.getElementById('heartQuantity').innerText)
    const totalPrice = price * quantity;
    document.getElementById('productListCount').innerText = count;
    document.getElementById('navbarUpdate').innerText = count;
    document.getElementById('navbarUpdate1').innerText = count;
    displayList(count, Pname, price, quantity, totalPrice)
    document.getElementById('heartBtn').setAttribute('disabled', false)
    grandTotalPrice()
    
})
document.getElementById('pandaBtn').addEventListener('click', function (event) {
    count+=1
    const pname =event.target.parentNode.parentNode.children[0].innerText;
    const price = parseInt(event.target.parentNode.parentNode.children[2].children[0].innerText);
    const quantity = parseInt(event.target.parentNode.parentNode.children[3].children[0].innerText);
    // console.log(quantity, price, pname);
    const totalPrice = price * quantity;
    document.getElementById('productListCount').innerText = count;
    document.getElementById('navbarUpdate').innerText = count;
    document.getElementById('navbarUpdate1').innerText = count;
    displayList(count, pname, price, quantity, totalPrice)
    document.getElementById('pandaBtn').setAttribute('disabled', false)
    grandTotalPrice()
   
})
document.getElementById('umbrellaBtn').addEventListener('click', function (event) {
    count+=1
    const pname =event.target.parentNode.parentNode.children[0].innerText;
    const price = parseInt(event.target.parentNode.parentNode.children[2].children[0].innerText);
    const quantity = parseInt(event.target.parentNode.parentNode.children[3].children[0].innerText);
    // console.log(quantity, price, pname);
    const totalPrice = price * quantity;
    document.getElementById('productListCount').innerText = count;
    document.getElementById('navbarUpdate').innerText = count;
    document.getElementById('navbarUpdate1').innerText = count;
    displayList(count, pname, price, quantity, totalPrice)
    document.getElementById('umbrellaBtn').setAttribute('disabled', false)
    grandTotalPrice()
   
})
document.getElementById('vueBtn').addEventListener('click', function () {
    count += 1
    const Pname = document.getElementById('vuePN').innerText;
    const price = parseInt(document.getElementById('vuePrice').value) 
    if (isNaN(price)) {
        alert('Enter Price Now')
        return;
    }
    const quantity = parseInt(document.getElementById('vueQuantity').value)
    if (isNaN(quantity)) {
        alert('Enter Price Now')
        return;
    }
    const totalPrice = price * quantity;
    document.getElementById('navbarUpdate').innerText = count;
    document.getElementById('navbarUpdate1').innerText = count;
    document.getElementById('productListCount').innerText = count;
    displayList(count, Pname, price, quantity, totalPrice)
    document.getElementById('vueBtn').setAttribute('disabled', false)
    grandTotalPrice()

})