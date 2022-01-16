let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter')

//Form submit event
form.addEventListener('submit', addItem);
// delete event
itemList.addEventListener('click', removeItem)
//Filter evetn
filter.addEventListener('keyup',filterItems)

function addItem(e){
    e.preventDefault();

    //get input value
    let newItem = document.getElementById('item').value

    //create new li element

    let li = document.createElement('li')
    // Add class
    li.className = 'list-group-item'
    //add text node with input value
    li.appendChild(document.createTextNode(newItem))
    //create delete button element
    let deleteBtn = document.createElement('button')
    // Add classes to button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    // Append text node
    deleteBtn.appendChild(document.createTextNode('X'))
    //append button to li
    li.appendChild(deleteBtn)
    //append li to list
    itemList.appendChild(li)
}

// Remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            let li = e.target.parentElement;
            itemList.removeChild(li)
        }
    }
}

//filter item
function filterItems(e){
    // convert text to lowercase
    let text = e.target.value.toLowerCase();
    // get list
    let items = itemList.getElementsByTagName('li');
    //convert to an array
    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!= -1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    })
}