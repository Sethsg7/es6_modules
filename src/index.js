// TODO
import WishList from "./wishlist";

let form = document.getElementById("submitForm");
let carMake = document.getElementById("makeInput");
let carModel = document.getElementById("modelInput");
let carYear = document.getElementById("yearInput");
let makeInfo = document.getElementById("car-make");
let modelInfo = document.getElementById("car-model");
let yearInfo = document.getElementById("car-year");
let removeBtn = document.getElementById("removeBtn");
let list = document.querySelector("#wishListContainer > ul");

let wshLst = new WishList();
console.log(wshLst);

form.addEventListener("submit", addCar);

removeBtn.addEventListener("click", removeCar);


function showCarDetails (car) {
    console.log(car);
    makeInfo.textContent = car.make;
    modelInfo.textContent = car.model;
    yearInfo.textContent = car.year;
    removeBtn.disabled = false;
    removeBtn.setAttribute("data-carId", car.id);
}


function updateDOMList() {

    list.innerHTML = "";
    wshLst.list.forEach((car) => {
        let li = document.createElement("li");
        li.textContent = `${car.make} ${car.model}`;
        li.addEventListener("click", () => showCarDetails(car));
        list.appendChild(li);
    })
}


function addCar(event) {

    event.preventDefault();
    let make = makeInput.value;
    let model = modelInput.value;
    let year = yearInput.value;

    wshLst.add(make, model, year);

    updateDOMList();
}


function removeCar(car) {

    let carId = Number(removeBtn.getAttribute("data-carId"));
    wshLst.remove(carId);
    updateDOMList();

    makeInfo.textContent = "";
    modelInfo.textContent = "";
    yearInfo.textContent = "";

    removeBtn.disabled = true;
}

