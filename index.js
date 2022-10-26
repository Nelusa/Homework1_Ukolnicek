import { Task } from './Task/Task.js';

const renderTasks = (tasks) => {
  const taskListElm = document.querySelector('.todo__tasks');
  taskListElm.innerHTML = tasks
    .map((task) => Task({ name: task.name, done: task.done, due: task.due }))
    .join('');
};

fetch(`https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks`)
  .then((response) => response.json())
  .then((data) => renderTasks(data));

const inputUndoneElm = document.querySelector('#checkbox-undone');
const inputDoneElm = document.querySelector('#checkbox-done');

inputDoneElm.addEventListener('click', () => {
  fetch(
    `https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks${
      inputDoneElm.checked === true && inputUndoneElm.checked === false
        ? `?done=true`
        : inputUndoneElm.checked === true && inputDoneElm.checked === false
        ? `?done=false`
        : ''
    }`,
  )
    .then((response) => response.json())
    .then(renderTasks);
});

inputUndoneElm.addEventListener('click', () => {
  fetch(
    `https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks${
      inputDoneElm.checked === true && inputUndoneElm.checked === false
        ? `?done=true`
        : inputUndoneElm.checked === true && inputDoneElm.checked === false
        ? `?done=false`
        : ''
    }`,
  )
    .then((response) => response.json())
    .then(renderTasks);
});
