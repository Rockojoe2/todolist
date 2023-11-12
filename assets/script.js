const inputBox = document.querySelector(".todo-space");
const listContainer = document.querySelector(".list-container");

function addTask(){
    const inputValue = inputBox.value;

    const newTask = document.createElement("li");
    newTask.innerHTML = inputValue + ' <button onclick="deleteTask(this)">Delete</button>';;
    listContainer.appendChild(newTask);

    inputBox.value = "";
    
}

function deleteTask(button){
    const listItem = button.parentNode;
    listContainer.removeChild(listItem);
}