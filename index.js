var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

//Forms submit event
form.addEventListener('submit',addItem);
// Delete event
itemList.addEventListener('click',removeItem);

//Add item
function addItem(e){
    e.preventDefault();

    //Get input value
    var newItem = document.getElementById('item').Value;

    // Creat new li element
    var li = document.createElement('li');
    // Add class
    li.className = 'list-group-item';
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    // Creat del button element
    var deleteBtn = document.createElement('button');

    // Add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    // Append text node
    deleteBtn.appendChild(document.createTextNode('x'));

    // Append button to li
    li.appendChild(deletebtn);

    // Append button to list
    itemList.appendChild(li);
}

// remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }

    }
}