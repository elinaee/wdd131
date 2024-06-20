const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');


// The following li element will hold each entries chapter title and an associated delete button.
const li = document.createElement ('li');

const deleteButton = document.createElementNS('button');

li.textContent = input.value;


// add the following icon to the delete button: ❌
deleteButton.textContent = '❌';


// append the li element variable  with the delete button.
li.append(deleteButton);


// append the li element variable to the unordered list in your HTML.
list.append(list);