import uuidv4 from 'uuid/v4'
// Setup the empty todos array

let todos = []



// loadTodos
// Arguments: none
// Return value: none

// Fetch existing todos from localStorage
const loadTodos = () =>{
    const toDoJSON = localStorage.getItem("toDo")
    try {
       todos = toDoJSON ? JSON.parse(toDoJSON): []

    }catch (e){
        todos =  []
    }
}

// saveTodos
// Arguments: none
// Return value: none

//Save todos to localstorage
const saveTodos = ()=>{
    localStorage.setItem("toDo", JSON.stringify(todos))
}

// getTodos
// Arguments: none
// Return value: todos array

const getTodos = () => todos

// createTodo
// Arguments: todo text
// Return value: none

const createTodo = (text) => {
    todos.push({
      id:  uuidv4(),
      text,
      completed: false
  })
      saveTodos()
  }
  
// removeTodo
// Arguments: id of todo to remove
// Return value: none

// Remove todo by id from the list

const removeTodo = (id)=>{
    const todoIndex = todos.findIndex((todo)=> todo.id === id)
    if (todoIndex > -1) {
        todos.splice(todoIndex, 1) // deleting 1 todo from the list 
        saveTodos()
    }
}

// toggleTodo
// Arguments: id of todo to toggle
// Return value: none

// toggle the completed value for given to do 
const toggleTodo = (id)=>{
    const todo = todos.find((todo) => todo.id === id)

    if (todo){
        todo.completed = !todo.completed
        saveTodos()
    }
}

loadTodos()

export {getTodos, createTodo, removeTodo, saveTodos, toggleTodo}

// Make sure to call loadTodos and setup the exports