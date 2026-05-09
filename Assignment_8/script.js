let form = document.getElementById("taskForm");
let input = document.getElementById("taskInput");
let list = document.getElementById("taskList");

window.onload = function() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => addTask(task.text, task.completed));
};

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let task = input.value;

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    addTask(task, false);
    saveTasks();

    input.value = "";
});

function addTask(text, completed) {
    list.innerHTML += `
        <li>
            <span class="${completed ? "completed" : ""}">${text}</span>

            <div>
                <button onclick="completeTask(this)">✔</button>
                <button onclick="deleteTask(this)">Delete</button>
            </div>
        </li>
    `;
}

function completeTask(btn) {
    let span = btn.parentElement.previousElementSibling;
    span.classList.toggle("completed");
    saveTasks();
}

function deleteTask(btn) {
    btn.parentElement.parentElement.remove();
    saveTasks();
}

function saveTasks() {
    let tasks = [];

    let all = document.querySelectorAll("#taskList li");

    all.forEach(li => {
        let text = li.querySelector("span").innerText;
        let completed = li.querySelector("span").classList.contains("completed");

        tasks.push({ text, completed });
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}