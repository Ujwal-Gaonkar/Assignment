document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        // Create new list item
        const li = document.createElement("li");
        li.innerHTML = `
            ${taskText}
            <button class="remove-btn">X</button>
        `;

        // Add delete functionality
        li.querySelector(".remove-btn").addEventListener("click", function () {
            li.classList.add("fade-out");
            setTimeout(() => li.remove(), 300);
        });

        // Append to list
        taskList.appendChild(li);

        // Clear input field
        taskInput.value = "";
    }

    // Event listener for the button
    addTaskBtn.addEventListener("click", addTask);

    // Event listener for "Enter" key
    taskInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") addTask();
    });
});