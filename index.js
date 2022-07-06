function addToList(){
    var taskName = document.getElementById('taskName').value;
    var tododiv = document.getElementById('mytodo');

    var todoitem = document.createElement('div')
    var todoname = document.createElement('li')
    todoname.innerHTML = taskName;
    var deletebtn = document.createElement('i');
    deletebtn.classList.add('far');
    deletebtn.classList.add('fa-trash-alt');

    todoitem.appendChild(todoname);
    todoitem.appendChild(deletebtn);

    tododiv.appendChild(todoitem);
    
}

function eraseText() {
    document.getElementById("taskName").value = "";
}

var tododiv = document.getElementById('mytodo');
tododiv.addEventListener('click', deleteItem);

function deleteItem(e){
    const element = e.target;
    if(element.classList['0'] === "far"){
        element.parentElement.remove();
    }
}