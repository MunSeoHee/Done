# Done

### URLs
[GET] /todos/brd/ -> 전체 투두 목록 출력

[POST][Auth] /todos/brd/ -> 새로운 투두 추가

    {"contents":todo내용}



[GET][Auth] /todos/done/<todo_id>/ -> 완료로 변경

[POST][Auth] /todos/memoUpdate/<todo_id> -> 메모 수정
    
    {"memo":memo}

[POST] /todos/delete/<todo_id> -> todo 삭제

[GET][Auth] /todos/todos -> 해당 유저의 todo 목록

[GET][Auth] /todos/users -> 유저 정보

[POST] /users/create -> 회원가입

    {"email": email, "username":username, "password":password}

[POST] /users/login -> 로그인

    {"email":email, "password":password}