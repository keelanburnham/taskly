'use strict';

const containerTaskList = document.querySelector('.task-list');
const inputTask = document.querySelector('input');
const tasks = [];

inputTask.addEventListener('keydown', function (e) {
  if (e.code === 'Enter') {
    AddTask();
  }
});

const AddTask = function () {
  let task = document.querySelector('input').value;
  tasks.push(task);
  UpdateTaskList(tasks);
};

const UpdateTaskList = function (tasks) {
  containerTaskList.innerHTML = '';
  tasks.forEach(function (task, index) {
    const html = `
    <li class="task">
      <input type="checkbox" name="task-${index + 1}" id="task-${index + 1}" />
      <label for="task-${index + 1}" class="task-text">${task}</label>
    </li>
    `;
    containerTaskList.insertAdjacentHTML('afterbegin', html);
  });
};
