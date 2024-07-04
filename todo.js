document.getElementById('add-button').addEventListener('click', addTask);

function addTask() {
    const input = document.getElementById('todo-input');
    const taskText = input.value.trim();

    if (taskText !== '') {
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.style.marginLeft = '10px';
        deleteButton.style.backgroundColor = '#dc3545';
        deleteButton.style.color = 'white';
        deleteButton.style.border = 'none';
        deleteButton.style.borderRadius = '4px';
        deleteButton.style.cursor = 'pointer';

        deleteButton.addEventListener('click', function() {
            listItem.remove();
        });

        listItem.addEventListener('click', function() {
            listItem.classList.toggle('completed');
        });

        listItem.appendChild(deleteButton);
        document.getElementById('todo-list').appendChild(listItem);

        input.value = '';
        input.focus();
    }
}
