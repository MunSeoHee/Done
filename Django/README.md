# Done

### URLs


#### [POST] /users/create -> 회원가입

    {"email": email, "username":username, "password":password}
    
![createuser](https://user-images.githubusercontent.com/38175311/101976919-49bb5080-3c8d-11eb-9806-820c4e1975fc.png)

#### [POST] /users/login -> 로그인

    {"email":email, "password":password}
![login](https://user-images.githubusercontent.com/38175311/101976950-7e2f0c80-3c8d-11eb-9774-d924f95e6bae.png)

    
#### [GET] /todos/brd/ -> 전체 투두 목록 출력
![login](https://user-images.githubusercontent.com/38175311/101976991-c4846b80-3c8d-11eb-87ea-699a7db68d68.png)

#### [POST][Auth] /todos/brd/ -> 새로운 투두 추가

    {  
        "contents":todo내용,
        "order":순서
    }
![login](https://user-images.githubusercontent.com/38175311/101977020-eda4fc00-3c8d-11eb-805f-cad7799d2965.png)
![login](https://user-images.githubusercontent.com/38175311/101977047-1dec9a80-3c8e-11eb-82f7-251f14f27e97.png)

#### [GET][Auth] /todos/done/<todo_id>/ -> 완료로 변경
![login](https://user-images.githubusercontent.com/38175311/101977156-cbf84480-3c8e-11eb-9d3a-f834dcad244a.png)
#### [POST][Auth] /todos/memoUpdate/<todo_id> -> 메모 수정
    
    {"memo":memo}
![login](https://user-images.githubusercontent.com/38175311/101977275-e2eb6680-3c8f-11eb-8009-ef5d9f3cc0cb.png)
![login](https://user-images.githubusercontent.com/38175311/101977281-f0a0ec00-3c8f-11eb-8b70-1788d6ce534f.png)
#### [POST][Auth] /todos/delete/<todo_id> -> todo 삭제
![login](https://user-images.githubusercontent.com/38175311/101977324-2fcf3d00-3c90-11eb-8c44-f67fc9055ece.png)
#### [GET][Auth] /todos/todos -> 해당 유저의 todo 목록
![login](https://user-images.githubusercontent.com/38175311/101977117-905d7a80-3c8e-11eb-9f06-df257e6c068f.png)
#### [GET][Auth] /todos/user -> 유저 정보
![login](https://user-images.githubusercontent.com/38175311/101977084-5e4c1880-3c8e-11eb-9357-1877e06ec96a.png)
