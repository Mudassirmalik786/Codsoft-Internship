document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTask');
    const taskList = document.getElementById('taskList');

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        `;
        taskList.appendChild(taskItem);

        taskInput.value = ''; 
    }

    function editTask(taskItem) {
        const span = taskItem.querySelector('span');
        const newText = prompt('Edit task:', span.textContent);
        if (newText !== null) {
            span.textContent = newText;
        }
    }

    function deleteTask(taskItem) {
        taskList.removeChild(taskItem);
    }

    addTaskButton.addEventListener('click', addTask);
    taskList.addEventListener('click', (e) => {
        const target = e.target;

        if (target.classList.contains('edit')) {
            editTask(target.parentElement);
        } else if (target.classList.contains('delete')) {
            deleteTask(target.parentElement);
        }
    });
});
