import { getTodos, toggleTodo, removeTodo } from './todos'
import { getFilters } from './filters'
// renderTodos
// Arguments: none
// Return value: none

//Render application todos based on filters
const renderTodos =()=>{
    const todoEl = document.querySelector("#toDos")
    const { searchTodo, hideCompleted}= getFilters()
    const filteredTodos = getTodos().filter((todo)=>{
        const searchTextMatch = todo.text.toLowerCase().includes(searchTodo.toLowerCase())
        const hideCompletedMatch = !hideCompleted || !todo.completed// filtering the check box with || operator  
        
        return searchTextMatch && hideCompletedMatch
    }) // filtering the to do text

    // filteredTodos = filteredTodos.filter((todo)=>{
    //    return !filters.hideCompleted || !todo.completed// filtering the check box with || operator  
    // }) 

    const incompletedTodos = filteredTodos.filter((todo)=>!todo.completed)

    todoEl.innerHTML = '' 
    todoEl.appendChild(generateSummaryDOM(incompletedTodos))
    
    if(filteredTodos.length > 0) {
        filteredTodos.forEach((todo)=>{
            todoEl.appendChild(generateTodoDOM(todo))
         })
    }else {
        const emptyMessage = document.createElement("p")
        emptyMessage.textContent = "There are no to-dos to show"
        emptyMessage.classList.add("empty-message")
        todoEl.appendChild(emptyMessage)
    }

}

// generateTodoDOM
// Arguments: todo
// Return value: the todo element

//Get the Dom elemnts for an individual note
const generateTodoDOM = (todo)=>{
    const todoEl = document.createElement("label")
    const containerEl = document.createElement("div")
    const checkBox = document.createElement("input")
    const todoText = document.createElement("span")
    const removeButton = document.createElement("button")

    //setup the checkbox 
    checkBox.setAttribute("type", "checkbox")
    checkBox.checked = todo.completed
    containerEl.appendChild(checkBox)
    checkBox.addEventListener("change", ()=>{
        toggleTodo(todo.id) // modifying checked item
       // saveToDos(toDo)// saving checked item
        renderTodos()
    })
// Add event handler to checkbox
//Modify the correct objects completed property =>toggleTodo
//Save the render

    //Setup the to do text
    todoText.textContent = todo.text
    containerEl.appendChild(todoText)

    //setup container

    todoEl.classList.add('list-item')
    containerEl.classList.add('list-item__container')  
    todoEl.appendChild(containerEl)
    
    //Setup the delete button
    removeButton.textContent = "remove"
    removeButton.classList.add('button', 'button--text')
    todoEl.appendChild(removeButton)
    removeButton.addEventListener("click", ()=>{
        removeTodo(todo.id)  // modifying deleting
        //saveToDos(toDo) // saving todo 
        renderTodos() // showing 
    })

    return todoEl
}

// generateSummaryDOM
// Arguments: incompletedTodos
// Return value: the summary element

//get the DOM elements for list summary
const generateSummaryDOM =  (incompletedTodos)=>{
    const summary = document.createElement("h2")
    const plural = incompletedTodos.length === 1 ? '' : "s"
    summary.classList.add("list-title")
    summary.textContent = `You have ${incompletedTodos.length} todo${plural} Left!` 
    return summary
}

export {generateTodoDOM, generateSummaryDOM, renderTodos }

// Make sure to set up the exports

