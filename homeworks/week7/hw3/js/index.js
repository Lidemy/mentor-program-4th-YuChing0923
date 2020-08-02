/* eslint linebreak-style: ["error", "windows"] */
const taskArr = document.querySelectorAll('.task_block');

const checkTask = (event, task) => {
  // 刪除任務
  if (event.target.classList.contains('delete')) {
    task.remove();
  }
  // 勾選任務
  const checkbox = task.querySelector('input[type=checkbox]');
  if (checkbox.checked) {
    task.classList.add('done');
  } else {
    task.classList.remove('done');
  }
};

taskArr.forEach((task) => {
  task.addEventListener('click', (event) => {
    checkTask(event, task);
  });
});

// 新增任務
document.querySelector('.add_btn').addEventListener('click', () => {
  const { value } = document.querySelector('.add_input');
  if (value) {
    const lastTaskValue = taskArr[taskArr.length - 1].querySelector('input[type=checkbox]').value;
    const taskId = Number(lastTaskValue.replace('task', '')) + 1;

    const newTask = document.createElement('div');
    newTask.classList.add('task_block');
    newTask.innerHTML = `
      <input type="checkbox" id="task${taskId}" name="task" value="task${taskId}">
      <label for="task${taskId}">
        <span class="content">${value}</span>
      </label>
      <button class="delete">x</button>
    `;
    newTask.addEventListener('click', (event) => {
      checkTask(event, newTask);
    });
    document.querySelector('.tasksList').append(newTask);
  }
  document.querySelector('.add_input').value = '';
});
