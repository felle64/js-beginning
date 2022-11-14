let header = document.getElementById("header");
let cart = document.getElementById("cart");
let container = document.getElementById("container");


let products = [
    {prodId: 1, name: "Bike", price: 1000, img: bike.jpg},
    {prodId: 2, name: "Car", price: 2000, img: car.jpg},
    {prodId: 3, name: "Boat", price: 3000, img: boat.jpg},
    {prodId: 4, name: "Plane", price: 4000, img: plane.jpg},
    {prodId: 5, name: "Train", price: 5000, img: train.jpg}
];

let userCart = [];

function printCart() {
    if(userCart.length === 0){
        cart.innerHTML = "Inget i kundvagnen";
    } else{

        let cartSum = 0;

        userCart.map(carProd => {
            //console.log("produkt" ,carProd);
            let getProd = products.find(products => prodId == carProd);
            cartSum += getProd.price
        })

        cartSum += cartSum + " kr";

        let showCartBtn = document.createElement("button");
        showCartBtn.innerText = "Visa kundvagn";
        showCartBtn.addEventListener("click", () => {
            console.log("visar kungvagn");
        })
        
        cart.innerHTML = "saker i kundvagnen";
    }
    
}