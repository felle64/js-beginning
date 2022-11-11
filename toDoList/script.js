//To Do list

let saveThingBtn = document.getElementById("saveThingBtn");
let thingToDo = document.getElementById("thingToDo");


if (!localStorage.getItem("things")) {
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

saveThingBtn.addEventListener("click", () => {

    let newThing = {
        "thingToDo": things.value
    }
    console.log("new thing", newThing);
    // HÄMTA
    let toDoList = JSON.parse(localStorage.getItem("things"));
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

printThing();