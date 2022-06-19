const toDoForm = document.getElementById('todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.getElementById('todo-list');

let toDos = []; //리스트에 담긴 값을 저장하기 위해 담을 변수를 배열로 만들어 준다.(데이터를 저장하는 기능) //let으로 선언한 이유: 값이 업데이트가 되어야 하기때문

const TODOS_KEY = 'todos';

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    //console.log(localStorage)
}
//삭제기능 함수
function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id)); //toDos에 있는  배열에서 클릭한 li아이디와 todo아이디가 다른것만 남겨둔다.
    saveToDos();

}
//todo list 추가하는 함수
function paintToDo(newTodo){
    //console.log('i will', newTodo)
    const li = document.createElement('li');
    li.id = newTodo.id;
    
    const span = document.createElement('span');
    span.innerText = newTodo.text;
    
    const button = document.createElement('button');
    button.innerText = 'delete';
    button.addEventListener('click', deleteToDo);

    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

//인풋에 입력값을 입력했을때 발생하는 이벤트 함수
function handleToDosunmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value; // 바로 아래 toDoList 값에 빈값을 주기전에 리스트 값을 먼저 저장함
    toDoInput.value = '';

    const newToDoObj = {
        text: newTodo,
        id: Date.now(),
    }

    //toDos.push(newTodo); //인풋에 입력되는 값을 toDos 배열에 push 함
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();

}

toDoForm.addEventListener('submit', handleToDosunmit);

function sayHello(item){
    //console.log('test입니다', item)
}
const savedTodos = localStorage.getItem(TODOS_KEY)
//console.log(savedTodos)
//로컬 스토리지에 'todos' 리스트가 있을 때
if(savedTodos !== null){
    const parsedToDos = JSON.parse(savedTodos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo)
 
}

