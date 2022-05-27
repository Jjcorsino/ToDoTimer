// Info fechas
const dateNumber = document.getElementById('dateNumber');
const dateTimer = document.getElementById('dateTimer');
const dateMonth = document.getElementById('dateMonth');
const dateYear = document.getElementById('dateYear');

// Container de tareas
const tasksContainer = document.getElementById('tasksContainer');

//Fechas
const setDate = () => {
    const date = new Date();
    dateNumber.textContent = date.toLocaleString('es', { day: 'numeric' });
    dateTimer.textContent = date.toLocaleString('es', { weekday: 'long' });
    dateMonth.textContent = date.toLocaleString('es', { month: 'long' });
    dateYear.textContent = date.toLocaleString('es', { year: 'numeric' });
};
// Agregar tarea
const addNewTask = event => {
    event.preventDefault();
    const { value } = event.target.taskText;
    if(!value) return;
    const task = document.createElement('div');
    task.classList.add('task', 'roundBorder');
    task.addEventListener('click', changeTaskState)
    task.textContent = value;
    tasksContainer.prepend(task);
    event.target.reset();
};

// Tarea finalizada
const changeTaskState = event => {
    event.target.classList.toggle('done');
};

// Ordenar las tareas
const order = () => {
    const done = [];
    const toDo = [];
    tasksContainer.childNodes.forEach( el => {
        el.classList.contains('done') ? done.push(el) : toDo.push(el)
    })
    return [...toDo, ...done];
}

const renderOrderedTasks = () => {
    order().forEach(el => tasksContainer.appendChild(el))
}

setDate();