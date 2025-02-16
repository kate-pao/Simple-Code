// script.js

// Get elements from index.html
const taskInput = document.getElementById('input-task');
const addTaskBtn = document.getElementById('input-task-btn');
const taskList = document.getElementById('task-list');

// Intialize the array for the task
let taskArray = JSON.parse(localStorage.getItem('taskArray'))||[];

// Load task when the page loads
document.addEventListener('DOMContentLoaded', updateTaskList);

// Use addEventListener to the add task button
addTaskBtn.addEventListener('click', addTask);

// Create a function to add task in the array
function addTask(){

    // Get the input task value
    const taskValue = taskInput.value.trim();

    // check if the value is empty
    if (taskValue !== ''){

        // Adding new task at the end
        taskArray.push(taskValue);

        // Save to the local storage for no load-page expiry session
        localStorage.setItem('taskArray', JSON.stringify(taskArray));

        // Update the list in task array
        updateTaskList();

        // Clear the inputted value
        taskInput.value = '';
    }
}

// Create a funtion to update task elements in the task list
function updateTaskList(){

    // Clear the current list to add only the new task
    taskList.innerHTML = ''; 

    // Use for loop through the task array
    for (let i = 0; i < taskArray.length; i++) {

        // Create a new task element
        const taskElement = document.createElement('ul'); // listed task
        taskElement.classList.add('task');
    
        // Create a new task text element
        const taskText = document.createElement('span');
        taskText.textContent = taskArray[i];

        // Creat a remove button in each element
        const removeBtn = document.createElement('button');
        removeBtn.classList.add('remove-btn');
        removeBtn.textContent = 'Remove';
        removeBtn.style.marginLeft = '15px'; //Add space

        removeBtn.addEventListener('click', function(){
            
            // remove task from the array
            taskArray.splice(i,1);

            updateTaskList();
        });

        // append elements
        taskList.appendChild(taskElement);
        taskElement.appendChild(taskText);
        taskElement.appendChild(removeBtn);
        }
    }
