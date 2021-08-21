//Taking id globally
const memory8GB = document.getElementById('memory-one');
const memory16GB = document.getElementById('memory-two');
const memoryCost = document.getElementById('memory-cost');

const storage256GB = document.getElementById('storage-one');
const storage512GB = document.getElementById('storage-two');
const storage1TB = document.getElementById('storage-three');
const storageCost = document.getElementById('storage-cost');

const freeDelivery = document.getElementById('free-delivery');
const chargeableDelivery = document.getElementById('chargeable-delivery');
const deliveryCost = document.getElementById('delivery-cost');

const bestPrice = document.getElementById('best-price');
const totalPrice = document.getElementById('total-price');

const inputField = document.getElementById('steve-kaku');
const applyButton = document.getElementById('apply-button');
let discountTotal = document.getElementById('discount-total')

//Memory
memory8GB.addEventListener('click', function () {
    memoryCost.innerText = 0;
    getTotalPrice();
});
memory16GB.addEventListener('click', function () {
    memoryCost.innerText = 180;
    getTotalPrice();
});

//Storage
storage256GB.addEventListener('click', function () {
    storageCost.innerText = 0;
    getTotalPrice();
});
storage512GB.addEventListener('click', function () {
    storageCost.innerText = 100;
    getTotalPrice();
});
storage1TB.addEventListener('click', function () {
    storageCost.innerText = 180;
    getTotalPrice();
});

//Free delivery
freeDelivery.addEventListener('click', function () {
    deliveryCost.innerText = 0;
    getTotalPrice();
});
chargeableDelivery.addEventListener('click', function () {
    deliveryCost.innerText = 20;
    getTotalPrice();
});

//UpdateTotal
function getTotalPrice() {
    const memoryTotal = Number(memoryCost.innerText);
    const storageTotal = Number(storageCost.innerText);
    const deliveryTotal = Number(deliveryCost.innerText);
    const bestTotal = Number(bestPrice.innerText);
    const subTotal = memoryTotal + storageTotal + deliveryTotal + bestTotal;

    totalPrice.innerText = subTotal;
    getDiscountPrice(subTotal);
};

// Discount price calculation
function getDiscountPrice(subTotal) {
    discountTotal.innerText = subTotal;
    applyButton.addEventListener('click', function (event) {
        const disCountText = inputField.value;
        if (disCountText === 'stevekaku') {
            totalAmount = subTotal - (subTotal * .20);
            discountTotal.innerText = totalAmount;
        }
    });
};









