const price = document.querySelector("#price");
const people = document.querySelector("#people");
const tip = document.querySelector("#tip");
const count = document.querySelector(".count");
const cost = document.querySelector(".cost");
const costInfo = document.querySelector(".cost-info");

function validation() {
    console.log(price.value, people.value, tip.value);
    if (price.value && people.value && tip.value) {
        countPrice();
    } else {
        alert("Something went NO YES");
    }
}

function countPrice() {
    const newPrice = parseFloat(price.value);
    const newPeople = parseFloat(people.value);
    const newTip = parseFloat(tip.value);
    sum = (newPrice.value + (newPrice.value * newTip.value)) / newPeople.value;
    console.log(sum);
    costInfo.style.display = 'block'
    cost.textContent = sum.toFixed(2);
}

count.addEventListener('click', validation);