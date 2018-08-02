// Set up filters default object

const filters = {
    searchTodo: "",
    hideCompleted: false
}

// getFilters
// Arguments: none
// Return value: filters object

const getFilters = () => filters

// setFilters
// Arguments: updates object with optional searchText or hideCompleted
// Return value: none

// Make sure to set up the exports

// const setFilters = (updates) => {
//     if(typeof updates.searchTodo === "string") {
//         filters.searchTodo = updates.searchTodo
//     }
//     if(typeof updates.hideCompleted === 'boolean') {
//         filters.hideCompleted = updates.hideCompleted
//     }
// }

// export { getFilters, setFilters }



const setFilters = ({ searchTodo, hideCompleted}) => {
    if(typeof searchTodo === "string") {
        filters.searchTodo = searchTodo 
    }
    if(typeof hideCompleted === 'boolean') {
         filters.hideCompleted = hideCompleted
    }
}

export { getFilters, setFilters }


