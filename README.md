# Done

### 기획

---

유저가 (1) 할일을 추가/삭제할 수 있고, (2) 유저의 맞춤형 태그를 통해 인스타그램에서 새로운 할일을 추천

1. 할 일 추가 및 삭제 (1)

2. 각 할 일 별로 메모 작성 가능

3. 각 할 일의 카테고리, 날짜 지정

4. 완료된 할 일을 삭제 또는 할 일로 복구

5. 비밀 번호 변경

6. 카테고리 이름 설정

7. 카테고리 이름을 통한 인스타그램에서 새로운 할 일 추천 (2) 

8. 드로그 앤 드랍으로 할 일들의 위치를 자유롭게 변경

### 고민 중인 내용

---

- 인스타그램을 이용한 할 일 추천

    -  사용자가 지정해놓은 카테고리 명들을 기반으로 인스타그램에서 해시태그 검색

    -  검색된 내용을 NER([https://github.com/eagle705/pytorch-bert-crf-ner](https://github.com/eagle705/pytorch-bert-crf-ner)) 이용하여 많이 나온 지명, 기관명을 뽑아낸다

    -  이 중 한가지를 랜덤으로 뽑아서 할 일 추천

- 사용자가 지정해 둔 카테고리명만 이용하여 인스타그램에서 글을 검색 할지, 아니면 [https://www.globing.co.kr/hash.html](https://www.globing.co.kr/hash.html) 를 이용하여 관련된 인기 해시태그들도 사용해 인스타그램에서 글을 검색할지
- 

# 아키텍처

---

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9ed7fb6c-f81f-429c-9afe-ff0bbae05bb7/Untitled.png](https://www.notion.so/498a2c8a51104085a2e02a186f276657#ab27ab9c76074ae0ab1e710c228ba435)

- 프론트는 리액트를 이용하며, axios를 이용하여 백엔드와 http 통신을 할 것입니다
- 백엔드는 django rest framework를 사용 할 것이며, 샐리니움을 이용한 편리한 크롤링과 쉽고 빠른 restful api 구현을 위해 선택하였습니다
- 데이터베이스는 보통 많이 이용되며, 익숙한 Mysql을 선택하였습니다
- 서버는 쉽고 빠르게 사용가능하며 안정적인 AWS EC2로 인스턴스를 분양받아 사용 할 예정입니다

# 유저플로우

---

### 로그인 화면

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d8c62fb7-48c4-4f20-87e9-37e6d834de25/Untitled.png](https://www.notion.so/498a2c8a51104085a2e02a186f276657#94cd441ffc8d411fbb927b0868acb257)

### 회원가입 화면

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3de128dd-bb38-433c-8dab-45ad60e4e57d/Untitled.png](https://www.notion.so/498a2c8a51104085a2e02a186f276657#def03597037d482ebdf211c7096a2731)

- 회원가입 인풋박스만 두면 밋밋할 거 같아, 오른쪽에는 서비스에 대한 간단한 소개를 넣으면 좋을 것 같아 위와 같이 구상하였습니다

### 메인화면

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d1248964-ebb1-4fa2-a7bc-9c3af211f866/Untitled.png](https://www.notion.so/498a2c8a51104085a2e02a186f276657#c05cd0ea3ce9419ab0ade32c7c211b6c)

- 왼쪽은 카테고리, 가운데에는 투두리스트가 나오도록 구상하였습니다
- 투두리스트 밑의 색깔은 할 일을 분류하는 카테고리같은 역할로 쉽게 구분하여 볼 수 있도록 도와줍니다
- 일정 추가에 달력모양의 버튼을 클릭하면 일정의 날짜를, 삼색원을 클릭하면 일정의 카테고리를 설정 할 수 있습니다

### 오늘 할 일 _ 메모

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a476d2a9-f367-4c8e-bc4d-8372ac590ba8/Untitled.png](https://www.notion.so/498a2c8a51104085a2e02a186f276657#14893ded9c894d4690cbca650d057daf)

- 일정을 클릭하면 아래에 메모지가 보여집니다
- 메모지에는 그 일정과 관련한 메모를 자유롭게 할 수 있습니다

### 오늘 할 일 _ 날짜 선택

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f1a42960-1842-48a4-86cd-1570a5cc1168/Untitled.png](https://www.notion.so/498a2c8a51104085a2e02a186f276657#324ce417f1bb4f6299e2f392d3586646)

- 할 일 추가에 달력 모양을 클릭하면 위와같이 달력이 나와서 해당 일정의 날짜를 선택 할 수 있습니다

### 오늘 할 일 _ 카테고리 선택

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ecad8385-821d-45fa-ab63-92020de1afe4/Untitled.png](https://www.notion.so/498a2c8a51104085a2e02a186f276657#883a95b471574a3d92354f9d5e523424)

- 할 일 추가의 삼색원을 클릭하면 카테고리 목록들이 표시되고, 선택한 카테고리의 색이 표시되게 됩니다

### 마이페이지

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/da26db4a-ae6c-44d6-aa5a-0591a350a81d/Untitled.png](https://www.notion.so/498a2c8a51104085a2e02a186f276657#abfef396474048db955562979f3350ac)

- 마이페이지에서는 비밀번호 변경 및 카테고리 설정이 가능합니다
- 카테고리 설정같은 경우는, 색 변경은 불가능하고 각 색상이 의미하는 카테고리 내용만 변경 할 수 있습니다

# 유저플로우

---

![service](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5ff27aca-02d8-4d80-b00a-3f070fc7d042/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20201207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20201207T101253Z&X-Amz-Expires=86400&X-Amz-Signature=34f17c889e725dfb6380578598ffd9528b73074af329e1fe33364f139130eb0a&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22)

- 로그인을 한 뒤에 메인 페이지를 볼 수 있습니다
- 메인페이지는 크게 3개의 부분으로 나누어지며, 왼쪽은 카테고리를 가운데는 할 일 목록을 오른쪽에는 랜덤박스가 보여집니다
- 오른쪽의 랜덤박스를 클릭하면 사용자가 카테고리로 설정해놓은 해시태그를 이용하여 인스타그램 크롤링을 통해 할 일을 추천해주게 됩니다

    ❓ 유저의 맞춤형 태그를 통해 인스타그램에서 새로운 할일을 추천이 무슨 뜻인지를 잘 이해하지 못하여, 상의 끝에 위와 같이 설정을 하게 되었습니다

    ❓ 사용자가 설정해놓은 카테고리 명을 유저 맞춤형 태그라고 생각하여, 이를 기반으로 할 일을 추천하는 것이 맞는 기획인지 아직도 의문이 많이 있습니다

- 마이페이지에서는 비밀번호 변경와, 카테고리에서 색 별로 카테고리 명을 설정할 수 있도록 합니다
