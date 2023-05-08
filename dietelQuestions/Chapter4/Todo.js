

let todoList = [];
function remember(task) {
    todoList.push(task);
}
function getTask() {
    return todoList.shift();
}
function rememberUrgently(task) {
    todoList.unshift(task);
}
remember("mark")
remember("eat")
remember("work  ")
console.log(getTask())
console.log(todoList)
rememberUrgently("house")
console.log(todoList)
console.log(getTask())
console.log(todoList)
