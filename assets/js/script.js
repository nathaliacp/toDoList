const toDoList = [];

const parentList = document.getElementById("parentList");
const buttonAdd = document.getElementById("insertItem");


function newItem() {
    const valueList = document.getElementById("valueList");
    const removeP = document.getElementById("changeParagraph");

    const itemList = document.createElement("li");
    const textItem = document.createElement("p");
    const checkedItem = document.createElement("span");
    const removeItem = document.createElement("button");

    itemList.classList.add("listItem");
    textItem.classList.add("listText");
    textItem.id = "listText"
    checkedItem.classList.add("checkbox");
    removeItem.classList.add("removeButton");
    removeP.classList.add("removeParagraph");

    const nameValue = valueList.value;
    textItem.innerText = nameValue;

    itemList.appendChild(checkedItem);
    itemList.appendChild(textItem);
    itemList.appendChild(removeItem);


    parentList.appendChild(itemList);

    toDoList.push(nameValue);

    valueList.value = "";
}
buttonAdd.addEventListener("click", newItem);


function identifyItem(event) {
    const itemClick = event.target;

    if (itemClick.tagName === "SPAN") {
        checkedItem(itemClick);
    }

    if (itemClick.tagName === "BUTTON") {
        removeItem(itemClick);
    }
}

parentList.addEventListener("click", identifyItem);

function checkedItem(span) {
    span.classList.toggle("checkmark");

    const textItem = span.parentElement.children[1];
    textItem.classList.toggle("textItemChecked");

    const listItem = span.parentElement;
    listItem.classList.toggle("itemList");
}

function removeItem(button) {
    button.parentElement.remove();

    const listItem = button.parentElement.children[1].textContent;
    const indexItem = toDoList.indexOf(listItem);

    toDoList.splice(indexItem, 1);

    if (toDoList.length === 0) {
        const addP = document.getElementById("changeParagraph");
        addP.classList.remove("removeParagraph");
    }
}