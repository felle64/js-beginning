//console.log("Man kan skriva bara log istället för console.log :)");
let f1Cars =["Mercedes","Redbull","Ferrari","Alpine"];

let f1 = document.getElementById("f1")
let newF1Team = document.getElementById("newF1Team");
let saveF1TeamBtn = document.getElementById("saveF1TeamBtn");

console.log("f1", f1);

function printF1Teams (){
    f1.innerHTML = "";

    for (f1Teams in f1Cars) {
    console.log("F1 Team", f1Cars[f1Teams]);

    f1.insertAdjacentHTML("afterbegin", "<li>" + f1Cars[f1Teams] + "</li>")
    }
}


saveF1TeamBtn.addEventListener("click", () => {
    //console.log("click på knapp!");
    console.log("input",newF1Team.value);

    f1Cars.push(newF1Team.value);
    console.log(f1Cars);
    printF1Teams();
})

printF1Teams();