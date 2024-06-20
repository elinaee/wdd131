const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');


// The following li element will hold each entries chapter title and an associated delete button.
//const li = document.createElement ('li');

//const deleteButton = document.createElementNS('button');

//li.textContent = input.value;


// add the following icon to the delete button: ❌
//deleteButton.textContent = '❌';


// append the li element variable  with the delete button.
//li.append(deleteButton);


// append the li element variable to the unordered list in your HTML.
//list.append(li);

// this adds a click event listener for the 'add chapter'button using a addEventListener.
button.addEventListener('click', function() {
    if (input.value.trim() !== '') {
        const li = document.createElement('li');
        li.textContent = input.value;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        li.append(deleteButton);
        list.append(li)
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        })
        input.value = '';
        input.focus();
    }
})

