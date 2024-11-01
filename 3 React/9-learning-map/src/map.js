const todoItems =[
    {id:1,todoText:'Buy Milk', todoDate:'4-sept-2024'},
    {id:2,todoText:'Go to college', todoDate:'Weekday'},
    {id:3,todoText:'Exercise', todoDate:'Everyday'}
];

console.log("___________Starting Using Map___________");

const todoItemsText = todoItems.map(todoItem => todoItem.todoText);
console.log(todoItemsText);
console.log("___________Ending Using Map___________");

// function convertObjectToTodoText(todoItem){
//   console.log(`Convert Function Was Called With Item ${JSON.stringify(todoItem)}, converting this to ${todoItem.todoText}`);
//   return todoItem.todoText;
// }


// console.log("___________Starting___________");
// const todoItemsText = [];
// todoItems.forEach(item => {
//   const str = convertObjectToTodoText(item);
//   todoItemsText.push(str);
// })
// console.log(todoItemsText);
// console.log("___________Ending___________");


