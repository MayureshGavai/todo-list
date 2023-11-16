let todoList = JSON.parse(localStorage.getItem('todoList')) || []

const btn = document.querySelector('.submit')
const reset = document.querySelector('.reset')

const displayTodo = function(){
    const output = document.querySelector('.output-container')
    output.innerHTML = ''
    todoList.forEach(function(task,index){
        const div = document.createElement('div')
        const pTag = document.createElement('p')
        pTag.className = 'todo-task'
        pTag.innerText = task
        const delete_btn = document.createElement('button')
        delete_btn.className = 'delete'
        delete_btn.textContent = 'Delete'
        delete_btn.addEventListener('click',function(){
            deleteTask(index)
        })
        div.append(pTag,delete_btn)
        output.append(div)
    }) 
    saveToLocalStorage()

}

btn.addEventListener('click',function(){
    const input = document.querySelector('input')
    if(input.value !== ''){
        todoList.push(input.value.trim())
        console.log(todoList)
        input.value=''
        displayTodo()
    }else{
        alert("Enter something!!!")
    }
    
})

function deleteTask(index){
    todoList.splice(index,1)
    displayTodo()
}

function saveToLocalStorage(){
    localStorage.setItem('todoList',JSON.stringify(todoList))
}

reset.addEventListener('click',function(){
    todoList = []
    displayTodo()
})

displayTodo()