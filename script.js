let nonQuery = document.getElementById("container");

let query = document.querySelector("#container");

let allSecondItems = document.querySelectorAll(".second");

let thirdInsideOl = document.getElementsByClassName("ol > third");

let hello = document.createTextNode("Hello!");
query.prepend(hello);

let footer = document.querySelector(".footer");
footer.classList.add("main");

footer.classList.remove("main");

let newListItem = document.createElement("li");

newListItem.textContent = "four";

let unordered = document.querySelector("ul");
unordered.append(newListItem);

let listItemsInsideOrdered = document.querySelectorAll("ol li");
for(let i=0; i<listItemsInsideOrdered.length; i++){
    listItemsInsideOrdered[i].style.backgroundColor = "green";
}

footer.remove();