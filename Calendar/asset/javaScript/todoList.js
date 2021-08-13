const items = document.querySelector('.todos_ul');
const input = document.querySelector('.todo_input');
const addBtn = document.querySelector('.add_btn');

let LS_KEY = "toDoList_key"
let toDoList = [];
let id = 0;

// Save to Local
function saveList(){
    localStorage.setItem(LS_KEY,JSON.stringify(toDoList))
}

// Create Logic
function createItem(text){
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class','todos_li'); 
    itemRow.setAttribute('data-id', id);
    itemRow.innerHTML =`
    <div class="todos">
        <input type="checkbox" class="todos_check">
            <span class="todos__name">${text}</span>
            <button class="todos__delete">
                <i class="fas fa-trash" data-id=${id}></i>
            </button>
    </div>
`;
    id++
    items.appendChild(itemRow);
    const toDoObj = {
        id,
        text
    }
    toDoList.push(toDoObj)
    saveList()
    return itemRow;
}

// Input.value Logic
function onAdd(){
    const text = input.value;
    if(text === ''){
    input.focus();
        return;
    }
    const item = createItem(text);
    item.scrollIntoView({block:'center'});
    input.value ='';
}

// 새로고침 시 Load
function loadList(){
    const loadedList = localStorage.getItem(LS_KEY);
    if(loadedList !== null){
        const parsedList = JSON.parse(loadedList)
        parsedList.forEach(function(todo){
            createItem(todo.text);
        })
    }
}

// Click 추가
addBtn.addEventListener('click',()=>{
    onAdd();
})

// Enter 추가
input.addEventListener('keypress',event =>{
    if(event.key ==='Enter'){
        onAdd();
    }
})

// Click 제거
items.addEventListener('click', event => {
    const id = event.target.dataset.id;
    if(id){
        const ParseId = JSON.parse(id);
        const toBeDeleted = document.querySelector(`.todos_li[data-id="${id}"]`);
        const CleanToDos = toDoList.filter((todo)=>{
            return todo.id !== ParseId + 1
        })
        toDoList = CleanToDos
        toBeDeleted.remove();
        saveList()
    }
})

// Load
    loadList()