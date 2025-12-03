// Exemplo de funcionalidade básica
document.querySelectorAll('.delete-btn').forEach(button => {
    button.addEventListener('click', function() {
        this.parentElement.remove();
    });
});


const taskInput = document.getElementById("task-input");
const clickButton = document.getElementById("add-task");
const tasklist = document.getElementById("task-list");

const listatasks = [];
clickButton.addEventListener("click",() => {
listatasks.push(taskInput.value);
addtask()
console.log(listatasks);

});

function addtask() {
    var li = document.createElement ("li")
    listatasks.forEach(element => {
        li.innerHTML = `<li>${element}</li>`
    });
    console.log(li);
    tasklist.appendChild(li);
    
}