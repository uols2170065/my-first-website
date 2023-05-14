const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; //관례상 string만 포함된 변수는 대문자로 표기한다

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem("username",username); //"username"이라는 key값에, username이라는 변수의 값을 value로 저장한다
    paintGreetings(username);
};

function paintGreetings(username){
    greeting.innerText=`hello, ${username}`; 
    greeting.classList.remove(HIDDEN_CLASSNAME);
};

const savedUsername = localStorage.getItem("username");

if(savedUsername===null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
}
else{
    paintGreetings(savedUsername);
}
