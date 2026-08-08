const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
let tasks = [];

const savedTasks = localStorage.getItem("tasks");
if(savedTasks !== null){
    tasks = JSON.parse(savedTasks);
}

function displayTasks(task){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = task;
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click",(event)=>{
        event.stopPropagation();
        let newTask = prompt("Enter new task..");
        if(newTask === null){
            return;
        }
        newTask = newTask.trim();
        if(newTask === ""){
            alert("Please enter a task");
            return;
        }
        const index = tasks.indexOf(task);
        tasks.splice(index,1,newTask);
        localStorage.setItem("tasks",JSON.stringify(tasks));
        span.textContent = newTask
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click",(event)=>{
        event.stopPropagation();
        const index = tasks.indexOf(task);
        tasks.splice(index,1);
        localStorage.setItem("tasks",JSON.stringify(tasks));
        li.remove();
    });

    li.addEventListener("click",()=>{
        li.classList.toggle("completed");
    });

    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
}

tasks.forEach(task => {
    displayTasks(task);
});

addBtn.addEventListener("click",() => {
    const task = taskInput.value.trim();
    if(task === ""){
        alert("Please enter a task!");
        return;
    }
    console.log(task);
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks(task);

    taskInput.value = "";
    taskInput.focus();
    
});
