let tasks = [
  { id: 1, description: "Despertar a las 7am", completado: false},
  { id: 2, description: "Hacer 20 min diarios de ejercicio",    completado: false},
  { id: 3, description: "Estudiar 90 min diarios",  completado: false},
]
function displayTasks(){
  const taskList = document.getElementById('taskList')
  taskList.innerHTML = "";
  tasks.forEach(task => {
      let li = `<li>${task.description}
      <div class="botones">
        <i class="fa-solid fa-square-check" style="color: #1c9c24;" onclick="taskCompleted(${task.id})" role="button"></i>
        <i class="fa-solid fa-square-minus" style="color: #d51515;" onclick="removeTask(${task.id})" role="button"></i>
      </div>
      </li>
      `;
      if(task.completado){
          li = `<li class="completed">${task.description}
          <div class="botones">
          <i class="fa-solid fa-square-check" style="color: #1c9c24;" onclick="taskCompleted(${task.id})" role="button"></i>
          <i class="fa-solid fa-square-minus" style="color: #d51515;" onclick="removeTask(${task.id})" role="button"></i>
          </div>
          </li>
          `;
      }
      taskList.innerHTML += li;
  });   
  updateTaskCount();
}
function addTask(){
  const taskInput = document.getElementById("taskInput");
  const description = taskInput.value.trim();
  if (description !== ""){
      const newTask = {
          id : tasks.length + 1,
          description: taskInput.value,
          completado:false,
      };
      tasks.push(newTask);
      taskInput.value = "";
  }
  displayTasks();
}
function removeTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
  console.log(tasks)
  displayTasks();
}
function taskCompleted(id) {
  tasks.forEach(task => {
      if(task.id === id){
          task.completado = !task.completado;
          console.log(task.completado)
      }
  })
  displayTasks();
}
function updateTaskCount() {
  const totalTasks = document.getElementById("totalTasks");
  const completedTasks = document.getElementById("completedTasks");
  totalTasks.textContent = tasks.length;
  const completedCount = tasks.filter((task) => task.completado === true);
  console.log(totalTasks.textContent = tasks.length)
  console.log(completedCount)
  const lengthCompletedCount = completedCount.length;
  completedTasks.innerHTML = lengthCompletedCount;
}
displayTasks();