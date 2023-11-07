const goalList = document.querySelector("ul.list");
var info = document.createElement("li");

info.textContent = "Click here to add";
goalList.appendChild(info);

info.onclick = async function() {
    const listItem = document.createElement("li");
    const listContent = prompt("Enter a new goal/reminder: ");
    listItem.textContent = listContent;
    goalList.removeChild(goalList.lastElementChild);
    goalList.appendChild(listItem);
    goalList.appendChild(info);
}