const submitForm = document.querySelector('.add');
const toDoinput = submitForm.querySelector('input');
const addButton = document.querySelector('.add-todo');
const todoList = document.querySelector('.todos_ul');
list = document.querySelectorAll('.todos_ul li'); 

let listLenght = list.length;

TODOS_LS = "toDos_key"

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
}

function deleteToDos(icon){
    //console.log("icon :",icon)
    

   const cleanToDos = toDos.filter(function(data){

    //console.log("todos.filter (data):", data)
    //console.log("data id :",data.id)
    return data.id !== icon;

   });

   //console.log( "true값 출력 : ",cleanToDos)
   toDos = cleanToDos;
       const delId = document.getElementById(`memo_del${icon}`);
       //console.log("delId : ",delId )
       delId.remove();

   saveToDos();
}


function paintToDo(text){

    const NewId = toDos.length  + 1

    const html =
    `
    <li class="todos_li" id=memo_del${NewId}>
        <div class="memo_container">
            <div class="memo_box">
                <input type="checkbox" id="todo_${listLenght}">
                <div class="memo_desc">
                    <label for="todo_${listLenght}">
                        <span class="check"></span>
                        ${text}
                    </label>
                </div>
                <i class="fas fa-trash 
                delete" onclick='deleteToDos(${NewId})'>
                </i>
            </div>
        </div>
    </li>
    `;
    todoList.innerHTML += html;
    const toDoOBJ = {
        id : NewId,
        text : text,   
    }
    toDos.push(toDoOBJ);
    saveToDos(toDoOBJ);
}

function submitHandler(event){
  event.preventDefault();
  const currentValue = toDoinput.value;
  paintToDo(currentValue);
  toDoinput.value = "";
}

function loadToDos(){
  const loadedtoDos = localStorage.getItem(TODOS_LS)
    
  if(loadedtoDos !== null){
      const parsedToDos = JSON.parse(loadedtoDos);
      parsedToDos.forEach(function(todo){
          paintToDo(todo.text);
      })
  }
}

function init_toDoList(){
  loadToDos();
}

submitForm.addEventListener("submit",submitHandler);
addButton.addEventListener("click",submitHandler);

init_toDoList();




