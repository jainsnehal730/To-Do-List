document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task");
    const addTaskButton = document.getElementById("add");
    const taskList = document.getElementById("task-list");

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const taskItem = document.createElement("li");
            taskItem.textContent = taskText;

            // Add a delete button to each task
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            taskItem.appendChild(deleteButton);

            taskList.appendChild(taskItem);
            taskInput.value = "";

            deleteButton.addEventListener("click", function () {
                taskList.removeChild(taskItem);
            });
        }
    });

    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTaskButton.click();
        }
    });
});