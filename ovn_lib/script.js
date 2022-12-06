import Books from "./books.js";

let books = new Books("Livet på spel", "Heaton", 305, "loaned out");
console.log(books.printBooks());

let para = document.createElement("p");
let box = document.getElementById("box");

function printToPage(){
    box.innerHTML = books.printBooks();
}

printToPage();
