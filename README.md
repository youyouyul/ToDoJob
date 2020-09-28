# To Do Job
 ### What's to do for a Job?



|개요||
|--|--|
||취업을 위한 모든 준비 과정을 한 곳에서 관리 할 수 있는 서비스
|| - 여러 기업의 자소서를 한 곳에서 관리 <br> - 일정 관리 <br> - 취준에 필요한 할 일 목록을 관리 <br> - 서류부터 면접까지 프로세스 관리

<br/>
<br />


|개발 환경 | |
|--|--|
| Back-End | NodeJS, Express, jwt, bcrypt, cookie-parser, concurrently |
| DB | MongoDB, mongoose |
|Front-End | React.js, axios, Redux, react-router-dom, http-proxy-middleware |
|build| $ yarn dev|



<br />


##  주요 기능 및 서비스

| ToDoList |   |
| -- |--|
| |취업 준비 과정 동안 할 일 목록과 오늘의 할 일 목록을 한 눈에 보며 관리|
|기능|등록 / 조회 / 수정(체크) / 삭제 |
|구현|다수의 목록 생성을 위해 컨테이너 내에서 스크롤하여 목록 랜더링|
||![스크린샷 2020-08-28 오후 2 11 36](https://user-images.githubusercontent.com/53922357/91524177-8c088e00-e939-11ea-957f-cf1c650763da.png)

<br/>
<br/>

|RecruitSite||
|--|--|
||취업 사이트 바로가기 목록|
|기능|페이지 이동|
||![스크린샷 2020-08-28 오후 2 13 56](https://user-images.githubusercontent.com/53922357/91524264-b3f7f180-e939-11ea-9dbf-0deb9a2a3cab.png)

<br />
<br />

  |UploadCard||
  |--|--|
  ||채용 공고 등록|
  |기능|등록|
  |구현|모달 창으로 구현|
  ||![image](https://user-images.githubusercontent.com/53922357/94415220-451beb80-01b8-11eb-957c-090a106a448d.png)

<br />
<br>

|Application||
|--|--|
||다수 기업의 채용 공고 및 지원서를 채용절차에 맞추어 관리|
|기능|목록 조회|
|구현|- 목록들을 가로 스크롤로 보여줌<br/>- 기업명 클릭 시 상세 정보 모달 오픈<br>- 상태 클릭 시 상태 변경 모달 오픈|
||![스크린샷 2020-08-28 오후 2 57 48](https://user-images.githubusercontent.com/53922357/91526565-e6f0b400-e93e-11ea-95d6-bbc6f3c4bcf4.png)

<br>
<br>

|Card||
|--|--|
||기업 채용 공고 상세 조회|
|기능|조회 / 수정 / 삭제 |
|구현|- 수정버튼 클릭 시 input box 활성화<br>- 삭제버튼 클릭 시 삭제
||![image](https://user-images.githubusercontent.com/53922357/94417253-d1c7a900-01ba-11eb-95a9-f9338219ed2b.png)|

<br>
<br>

|UpdateCard||
|--|--|
||채용 전형 상태 관리|
|기능|조회 / 수정|
|구현|select box로 현재 진행 중인 전형(서류/시험/면접/최종) 및 결과(진행 중/대기 중/ 합격/탈락) 선택|
||![image](https://user-images.githubusercontent.com/53922357/94417727-6500de80-01bb-11eb-9ffc-798cce509ee0.png)|
||결과가 합격일 경우 다음 전형 수정 컨테이너 활성화|
||![image](https://user-images.githubusercontent.com/53922357/94418269-215aa480-01bc-11eb-8bca-a061a6a88c72.png)|

