//To Do list

let saveThingBtn = document.getElementById("saveThingBtn");
let thingToDo = document.getElementById("thingToDo");
let toDoListUi = document.getElementById("toDoList")

let toDoList = [];

fetch("things.json")
.then(function(res){
    return res.json();
})
.then(function(data){
    console.log(data);
})

function printlist () {

    toDoListUi.innerHTML = "";

    toDoList.map(todo => {

        let toDoItem = document.createElement("li");
        toDoItem.innerText = "Gör: " + todo;
        toDoItem.id = todo;
        toDoItem.addEventListener("click", (event) =>{
            console.log("Click", event.target.id);
            toDoList = toDoList.filter(todo => todo !== event.target.id);
            printlist();
        })
        toDoListUi.appendChild(toDoItem);

    });
}

saveThingBtn.addEventListener("click", () => {
   // console.log("spara todo");

    toDoList.push(thingToDo.value);
    //console.log(toDoList);
    printlist();
})


printlist ();
/*if (!localStorage.getItem("things")) {
    fetch("things.json")
    .then(res => res.json())
    .then(data => {
        // console.log("fetch json", data);

        // let stringData = JSON.stringify(data);
        // console.log("stringified", stringData);

        // let parsedData = JSON.parse(stringData);
        // console.log("parsed data", parsedData);

        localStorage.setItem("things", JSON.stringify(data))
    })
}

    let newThing = {
        "thingToDo": things.value
    }
    console.log("new thing", newThing);
    // HÄMTA
   /* let toDoList = JSON.parse(localStorage.getItem("things"));
    // ÄNDRA
    toDoList.push(newThing)
    console.log("new thing", toDoList);


    // SPARA
    localStorage.setItem("things", JSON.stringify(newThing));

    printThing();

})

function printThing() {

    toDoList.innerHTML = "";

    // HÄMTA
    let things = JSON.parse(localStorage.getItem("things"));
    console.log("things", things);

    for (i = 0; i < things.length; i++) {
       // console.log("person in for", persons[i]);
       toDoList.insertAdjacentHTML("afterbegin", things[i].thingToDo + "<br/>");
    }
    
}

*/