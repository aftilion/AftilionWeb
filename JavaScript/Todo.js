const addTaskBtn = document.getElementById("add-task-btn");
const deskTaskInput = document.getElementById("description-task");
const todosWrapper = document.querySelector(".todos-wrapper");

let tasks ;

let todoItemElements =[];

// localStorage.tasks ? tasks = [] : tasks = JSON.parse(localStorage.getItem('tasks'));
localStorage.tasks ?  tasks = JSON.parse(localStorage.getItem('tasks')) : tasks = [];


function Task(description) {
    this.description = description;
    this.completed = false;
}

const createTemplate = (task,index) => {
    return `
                                   <div class="todo-item ${task.completed ? 'checked' : ''}">
                                        <div class ="description">${task.description}</div>
                                        <div class ="buttons">
                                            <input onclick="completeTask(${index})" class=" btn-complete" type="checkbox" ${task.completed ? 'checked' : ''}>
                                           <button onclick="deleteTask(${index})" class="bth-delete">Delete</button>
                                        </div>
                                   </div>
`

}

const filterTasks = () => {
    const activeTasks = tasks.length && tasks.filter(item => item.completed === false);
    const completedTasks = tasks.length && tasks.filter(item => item.completed === true);
    tasks = [...activeTasks , ...completedTasks];
}


const fillHtmlList = () => {
    todosWrapper.innerHTML = "";
    if(tasks.length > 0 ) {
        filterTasks();
        tasks.forEach((item,index)=>{
            todosWrapper.innerHTML += createTemplate(item, index);
        });
        todoItemElements = document.querySelectorAll('.todo-item');
    }
}

fillHtmlList();

const updateLocal = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

const completeTask = index => {
    console.log(index);
    tasks[index].completed = ! tasks[index].completed;
    if(tasks[index].completed) {
      todoItemElements[index].classList.add('checked');
    } else {
        todoItemElements[index].classList.remove('checked');
    }
    updateLocal();
    fillHtmlList();
}




const deleteTask = index => {
    // console.log(index);
    todoItemElements[index].classList.add('delition');
    setTimeout(() =>
    {
        tasks.splice(index, 1);
        updateLocal();
        fillHtmlList();
    },500)
}

addTaskBtn.addEventListener('click', () => {
    tasks.push(new Task(deskTaskInput.value));
    // console.log(tasks)
    updateLocal();
    fillHtmlList();
    deskTaskInput.value ="";
})