const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const li = document.createElement('li');
        li.textContent = taskText;
        taskList.appendChild(li);
        taskInput.value = '';
        li.addEventListener('click', toggleTask);
    } else {
        alert('Please enter a task.');
    }
}

function toggleTask() {
    this.classList.toggle('completed');
}
