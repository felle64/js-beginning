import Books from "./books.js";

let books = new Books("Livet på spel", "Heaton", 305, "loaned out");
console.log(books.printBooks());

let para = document.createElement("h2");
let box = document.getElementById("box");
para.textContent = "HELLO";

function printToPage(){
    box.innerHTML = books.printBooks();   
   
}

printToPage();
console.log(para);