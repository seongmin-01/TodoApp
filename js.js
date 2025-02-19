// html문서 로드 후 실행
document.addEventListener('DOMContentLoaded', function() {
    const todoList = document.getElementById("todoList"); 
    const inputTodo = document.getElementById("inputTodo"); 
    const btnAdd = document.getElementById("btnAdd"); 

// 등록
btnAdd.addEventListener('click', function(e) {
    const todoValue = inputTodo.value;  // input필드에서 입력한 값을 todoValue에 저장

    const listItem = document.createElement('li'); //li태그 생성
    //li태그의 클래스 이름 정의(부트스트랩의 정의 되어있는 클래스명의 스타일을 적용하기 위해서)
    listItem.className = 'd-flex list-group-item'; 
    listItem.innerText = todoValue; // 입력받은 값 추가

    const listBtn = document.createElement('button'); // button 생성
    listBtn.className = 'btn-close ms-auto'; 
    
    // 삭제
    listBtn.onclick = function(e) {
        // 삭제할 타겟? 을 지정 (위에서 li태그에 입력값을 저장하여 생성되기 때문에 li를 지정? 하는 것임)
        let pNode = e.target.parentNode; 
        todoList.removeChild(pNode); // 리스트에서 삭제
    }

    listItem.appendChild(listBtn); // 삭제 버튼 추가해줌
    todoList.appendChild(listItem); // 목록 추가해줌

    inputTodo.value = ""; // 입력한 후에 필드 비우기
    });

});