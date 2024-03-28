///////////////////
    //// Solution
///////////////////

//////////////////////////////
// ===========================================
//////////// == Thinking Way ==
// ===========================================
//// 1. Collect Variables.
//// 2. Add Event Listener to the submit button to add the tasks.
//// 3. Check if the input is empty or not befor submit.
//// 4. Append task in the tasks div and save it in the local storage.
//// 5. Add Delete Button to the task to delete it and remove it from local storage.
//// 6. Define functions for each action.
//// 7. Load Tasks from local storage when reload the tap or open the window "on loading the document".
//////////////////////////////

// Define Variables
const tasksInput = document.querySelector(".form .input");
const tasksSubmit = document.querySelector(".form .add");
const tasksContainer = document.querySelector(".tasks");

// Load tasks from localStorage on page load
document.addEventListener("DOMContentLoaded", () => {
    let tasksString = localStorage.getItem("Tasks") || "";
    let tasks = tasksString.split(",");
    tasks.forEach(task => {
        if (task.trim() !== "") { // Check if taskContent is not empty
            createTask(task.trim());
        }
    });
});

// Add Event Listener for Submit Button
tasksSubmit.addEventListener("click", (e) => {
    e.preventDefault();

    if(tasksInput.value.trim() !== "") { // Trim the input value to remove leading/trailing whitespace
        createTask(tasksInput.value);
        tasksInput.value = ""; // Clear the input field after adding a task
    }
});

// Function to create a new task
function createTask(taskContent) {
    // Store task in localStorage
    storeTaskInLocalStorage(taskContent);

    // Create task element
    const task = document.createElement('div');
    task.textContent = taskContent;
    task.classList.add('task');

    // Create delete button
    const deleteBtn = document.createElement('span');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
        // Remove task from localStorage when deleted
        deleteTaskFromLocalStorage(taskContent);
        task.remove(); // Remove the task from the DOM
    });

    task.appendChild(deleteBtn);
    tasksContainer.appendChild(task);

    // Add Event Listener for task
    task.addEventListener('click', () => {
        task.classList.toggle('done');
    })
}

// Function to store a task in localStorage
function storeTaskInLocalStorage(taskContent) {
    let tasksString = localStorage.getItem("Tasks") || "";
    let tasks = tasksString.split(",");
    tasks.push(taskContent);
    localStorage.setItem("Tasks", tasks.join(","));
}

// Function to remove a task from localStorage
function deleteTaskFromLocalStorage(taskContent) {
    let tasksString = localStorage.getItem("Tasks") || "";
    let tasks = tasksString.split(",");
    tasks = tasks.filter(task => task !== taskContent);
    localStorage.setItem("Tasks", tasks.join(","));
}