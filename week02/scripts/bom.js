const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
const feedback = document.querySelector('#feedback');


button.addEventListener('click', () => {
    if (input.value) {
        //temp:
        console.log('clicked');
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        feedback.textContent = "";
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        li.append(deleteButton);
        list.append(li);
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        })
        input.focus();
        input.value='';
    }

    else {
        input.focus();
       
        //give feedback to user
        feedback.textContent = "Please enter a Book and Chapter"
    }
});


