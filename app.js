const addItemBtn = document.getElementById('addCart');

const productContent = document.getElementById('productContnet');

const productItems = document.getElementById('productItem')

function cartItems(name, price, quantity) {

    const productName = productItems.getElementById('productName').text();
    const productCost = productItems.getElementsById('price').value();
    const productQuantity = productItems.getElementById('qtyValue').value();

    productName = name;
    productCost = price;
    productQuantity = quantity;
}

function addToCart() {

}

function showCart() {
    const cartTable = document.getElementById('cart').querySelector('table');
    cartTable.style.display = 'none';
}