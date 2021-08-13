[화면 기록 2021-08-13 15.52.42.mov](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8adf0228-6f11-4933-ab76-aee69dac4c64/화면_기록_2021-08-13_15.52.42.mov)

[화면 기록 2021-08-13 15.54.23.mov](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9e61ea74-97a5-4ddf-95c1-198ee2ea5469/화면_기록_2021-08-13_15.54.23.mov)

# ✅ TodoList

일정을 보면서 간단하게 todoList 📝 를 입력하자!

# 기술 스택

- HTML
- CSS
- JavaScript

# 기능 설명

> `Creat`

- `` 스프링템플릿을 활용하여 동적으로 List 추가

```jsx
itemRow.innerHTML =`
    <div class="todos">
        <input type="checkbox" class="todos_check">
            <span class="todos__name">${text}</span>
            <button class="todos__delete">
                <i class="fas fa-trash" data-id=${id}></i>
            </button>
    </div>
`;
```

> `Delete`

- filter 메서드를 활용한 Delete 구현

```jsx
const CleanToDos = toDoList.filter((todo)=>{
            return todo.id !== ParseId + 1
        })
```

> `Save`

- 템플릿으로 만들어진 List 요소들 LocalStorage에 저장

```jsx
function saveList(){
    localStorage.setItem(LS_KEY,JSON.stringify(toDoList))
}
```

> `Load`

- LocalStorage에 저장된 정보를 JSON.parse를 통해서 Load
- 새로 고침시에도 저장된 정보는 사라지지 않는다.

```jsx
function loadList(){
    const loadedList = localStorage.getItem(LS_KEY);
    if(loadedList !== null){
        const parsedList = JSON.parse(loadedList)
        parsedList.forEach(function(todo){
            createItem(todo.text);
        })
    }
}
```

# 아쉬운 점

- CSS 에 관련 부분이 아쉽다.

# Update

> 2021년 8월 13일 업데이트

- 엔터 시에 리스트 업로드
- 입력 할 경우 해당 요소로 focus
- 아무것도 입력하지 않을 경우 로직 처리
- <li>태그 생성 후 템플릿 리터럴을 통한 Create
- Delete 로직 변경

# 🛠 리팩토링 진행

## [210813] Repectoring - todoList

## 계획

> 전체적인 계획



> 세부적인 계획



# 🛠수정부분

## HTML

- <a> 태그 대신 <Button> 태그 사용

## JavaScript

> 추가된 부분

- 엔터 시에 입력

```jsx
input.addEventListener('keypress',event =>{
    if(event.key ==='Enter'){
        onAdd();
    }
})
```

- 입력 할 경우 해당 요소의 중앙으로 이동

```jsx
    item.scrollIntoView({block:'center'});
```

- 아무것도 입력하지 않을 경우 로직 처리

```jsx
if(text === ''){
        input.focus();
        return;
    }
```

> 수정한 부분
- <li>태그 생성 후 템플릿 리터럴을 통한 Create

```jsx
		// createElement를 통한 
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class','todos_li'); 
    itemRow.setAttribute('data-id', id);

		itemRow.innerHTML = `` // 템플릿 리터럴을 통한 동적인 추가 방식

    items.appendChild(itemRow);
```

- Delete 로직 변경

```jsx
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
```

클릭 대상을 필터를 통해서  CleanToDos에 콜백하여 할당했다. 이후에 LocalStoragy에 filter된 값을 재 할당하였고 remove 메서드를 사용하여 현재 화면에 보여지는 요소 제거.
