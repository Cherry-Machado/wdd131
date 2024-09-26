const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function() {
    // Check if the input is not empty
    if (input.value.trim() !== '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        
        li.textContent = input.value; // Set the text of the list item
        deleteButton.textContent = '❌'; // Set the text of the delete button

        // Add an event listener to the delete button
        deleteButton.addEventListener('click', function() {
            list.removeChild(li); // Remove the list item
            input.focus(); // Focus back on the input
        });

        li.append(deleteButton); // Append the delete button to the list item
        list.append(li); // Append the list item to the list
        input.value = ''; // Clear the input field
        input.focus(); // Focus back on the input
    } else {
        alert('Error: Please enter a valid chapter.');
        input.focus(); // Focus back on the input
    }
});
