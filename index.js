const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

function addTask() {
    if(todoInput.value === ''){
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = todoInput.value;
        todoList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u002D";
        li.appendChild(span);
    }
    todoInput.value = '';
}

todoList.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);