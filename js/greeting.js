const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');
const HIDDEN_CLASSNAME = 'hidden'; //string으로만 되어있는 경우는 관습적으로 대문자를 사용해서 변수를 만든다.
const USERNAME_KEY = 'username';

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    greeting.innerText = `hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, username);
    paintGreeting(username);

}
function paintGreeting(activeName){
    greeting.innerHTML = `😍 <span>hello</span> ${activeName} 😍`;

}


const saveUsername = localStorage.getItem(USERNAME_KEY);
if(saveUsername === null){//최초 페이지 로딩됐을때 form 내부는 아무것도 없는 조건 충족
    //유저정보가 없을때
    loginForm.classList.remove(HIDDEN_CLASSNAME); //removeClass hidden을 해주므로써 input 폼이 보여지게 함
    loginForm.addEventListener('submit', onLoginSubmit); // input폼에 submit 이벤트가 일어나길 대기하는 함수 선언 후 이벤트 발생하면 힘수실행 하게됨

}else{
    //유저정보가 있을때
    paintGreeting(saveUsername);
    greeting.classList.remove(HIDDEN_CLASSNAME);
}