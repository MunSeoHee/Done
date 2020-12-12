# Done

### URLs


[POST] /users/create -> 회원가입

    {"email": email, "username":username, "password":password}
![createuser][https://user-images.githubusercontent.com/38175311/101976919-49bb5080-3c8d-11eb-9806-820c4e1975fc.png]

[POST] /users/login -> 로그인

    {"email":email, "password":password}
    
    
[GET] /todos/brd/ -> 전체 투두 목록 출력

[POST][Auth] /todos/brd/ -> 새로운 투두 추가

    {  
        "contents":todo내용,
        "order":순서
    }



[GET][Auth] /todos/done/<todo_id>/ -> 완료로 변경

[POST][Auth] /todos/memoUpdate/<todo_id> -> 메모 수정
    
    {"memo":memo}

[POST] /todos/delete/<todo_id> -> todo 삭제

[GET][Auth] /todos/todos -> 해당 유저의 todo 목록

[GET][Auth] /todos/user -> 유저 정보
