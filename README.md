# TO-DO JOB
#### NODEJS와 REACT를 활용한 웹 서비스 프로젝트
<hr>

- 개요
    > 취업을 위한 모든 준비 과정을 한 곳에서 관리 할 수 있는 서비스 
    > - 여러 기업의 자소서를 한 곳에서 관리
    > - 일정 관리
    > - 취준에 필요한 할 일 목록을 관리
    > - 서류부터 면접까지 프로세스 관리


- 기술 스택
    > Back-End
    > - NodeJS, Express, jwt, bcrypt, body-parser, cookie-parser, concurrently 

    > DB
    > - MongoDB

    > Front-End
    > - React.js, axios, Redux, react-router-dom, http-proxy-middleware

- build
    > $ yarn dev


- 주요 기능 및 서비스
    - ToDoList (개발 완료)
        > 취업 준비 과정 동안 할 일 목록과 오늘의 할 일 목록을 한 눈에 보며 관리
        > - 기능 : 등록 / 조회 / 체크 / 삭제 
        > - 구현 : 다수의 목록 생성을 위해 컨테이너 내에서 스크롤하여 목록 랜더링
        ![스크린샷 2020-08-28 오후 2 11 36](https://user-images.githubusercontent.com/53922357/91524177-8c088e00-e939-11ea-957f-cf1c650763da.png)

    - RecruitSite (개발 완료 , 기능 추가 예정)
        > 취업 사이트 바로가기 목록
        > - 기능 : 클릭 시 링크로 이동
        ![스크린샷 2020-08-28 오후 2 13 56](https://user-images.githubusercontent.com/53922357/91524264-b3f7f180-e939-11ea-9dbf-0deb9a2a3cab.png)



    - Application (개발 진행 중)
        > 다수 기업의 채용 공고 및 지원서를 채용절차에 맞추어 관리
        > - 기능 : 등록 / 조회 / 수정 / 삭제 
        > - 구현 
        >   > - D - Day 정렬에 따라 지원서 목록들을 가로 스크롤로 보여줌
        >   > - 카드 클릭 시 상세 페이지(혹은 모달)로 이동
        >   > - 상태 관리 통해 채용절차(서류 -> 시험 -> 면접)에 따른 지원서 관리
        ![스크린샷 2020-08-28 오후 2 35 39](https://user-images.githubusercontent.com/53922357/91525153-cecb6580-e93b-11ea-8738-2f4762bdeed4.png)




