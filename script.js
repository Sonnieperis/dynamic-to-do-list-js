document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
  
    let tasks = [];
  
    // Load tasks from Local Storage when the page loads
    function loadTasksFromStorage() {
      const storedTasks = localStorage.getItem('tasks');
      if (storedTasks) {
        tasks = JSON.parse(storedTasks);
        tasks.forEach(task => renderTask(task));
      }
    }
  
    // Save tasks array to Local Storage
    function saveTasksToStorage() {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  
    // Render a single task in the DOM
    function renderTask(taskText) {
      const listItem = document.createElement('li');
      listItem.textContent = taskText;
  
      const removeButton = document.createElement('button');
      removeButton.textContent = "Remove";
      removeButton.className = "remove-btn";
  
      removeButton.onclick = function () {
        taskList.removeChild(listItem);
        tasks = tasks.filter(t => t !== taskText);
        saveTasksToStorage();
      };
  
      listItem.appendChild(removeButton);
      taskList.appendChild(listItem);
    }
  
    // Add new task and update Local Storage
    function addTask() {
      const taskText = taskInput.value.trim();
      if (taskText === "") {
        alert("Please enter a task.");
        return;
      }
  
      tasks.push(taskText);
      renderTask(taskText);
      saveTasksToStorage();
  
      taskInput.value = "";
    }
  
    // Event Listeners
    addButton.addEventListener('click', addTask);
  
    taskInput.addEventListener('keypress', function (event) {
      if (event.key === 'Enter') {
        addTask();
      }
    });
  
    // Initial load from Local Storage
    loadTasksFromStorage();
  });
  