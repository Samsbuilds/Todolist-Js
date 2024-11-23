
const addTaskButton = document.getElementById("addTaskButton");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const completionMessage = document.getElementById("completionMessage");
const welcomeMessage = document.getElementById("welcomeMessage");
const instructionMessage = document.getElementById("instructionMessage");

const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('username');

if (username) {
    welcomeMessage.textContent = `Hello Dear, ${username}`;
} else {
    welcomeMessage.textContent = "Hello Dear, User";
}

instructionMessage.textContent = "What's on your to-do list today? Add it below.";

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Veuillez entrer une tâche.");
        return;
    }

    const tasks = document.querySelectorAll("#taskList li span");
    for (let task of tasks) {
        if (task.textContent.toLowerCase() === taskText.toLowerCase()) {
            alert("Cette tâche existe déjà.");
            return;
        }
    }

    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const span = document.createElement("span");
    span.textContent = taskText;

    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            li.classList.add("completed");
            completionMessage.style.display = "block";
            setTimeout(() => {
                completionMessage.style.display = "none";
            }, 2000);
        } else {
            li.classList.remove("completed");
        }
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    taskList.appendChild(li);
    taskInput.value = "";
}

addTaskButton.addEventListener("click", addTask);
taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});
