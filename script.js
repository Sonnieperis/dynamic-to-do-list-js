// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
  
    // Function to add a task
    function addTask() {
      const taskText = taskInput.value.trim(); // Get input and trim whitespace
  
      if (taskText === "") {
        alert("Please enter a task.");
        return;
      }
  
      // Create new list item (task)
      const listItem = document.createElement('li');
      listItem.textContent = taskText;
  
      // Create remove button
      const removeButton = document.createElement('button');
      removeButton.textContent = "Remove";
      removeButton.className = "remove-btn";
  
      // Add click event to remove button
      removeButton.onclick = function () {
        taskList.removeChild(listItem);
      };
  
      // Append remove button and list item to task list
      listItem.appendChild(removeButton);
      taskList.appendChild(listItem);
  
      // Clear input
      taskInput.value = "";
    }
  
    // Event listener for Add Task button
    addButton.addEventListener('click', addTask);
  
    // Event listener for Enter key in task input
    taskInput.addEventListener('keypress', function (event) {
      if (event.key === 'Enter') {
        addTask();
      }
    });
  });
  