const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

// form으로 submit 했을 시 ul태그 안에 태그 만들어주는 메소드
function paintToDo(text) {
    const li = document.createElement("li"); // li element 생성
    const delBtn = document.createElement("button"); // button 생성
    delBtn.innerHTML = "❌"; 
    const span = document.createElement("span"); // span 생성
    span.innerText = text; // span태그에 text 즉 currentValue = toDoInput.value값을 넣어줌.
    li.appendChild(span); // li 태그 안에 span 생성
    li.appendChild(delBtn); // li 태그 안에 button 생성
    toDoList.appendChild(li); // //ul태그 안에 li 태그 넣어줌.
}
//submit 이벤트 실행시 실행되는 메소드
function handleSubmit(event) {
    //값입력 후 새로고침되는 걸 디폴트로 해줌
    event.preventDefault();
    const currentValue = toDoInput.value; //값 받아와서
    paintToDo(currentValue); // 메소드 인자값넘겨줌
    toDoInput.value = ""; // 넘겨주고 초기화
}


function loadToDos() {
    const toDos = localStorage.getItem(TODOS_LS);
    // console.log(toDoForm);
    if(toDos !== null) {
    } 
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit)
}

init();