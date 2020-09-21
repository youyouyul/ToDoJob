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

    - Upload Card (개발 완료)
        > 공고 등록 
        > - 기능 : 등록
        > - 구현 : 헤더의 등록 버튼 통해 모달 창 열어서 새로운 공고 등록




    - Application (개발 진행 중)
        > 다수 기업의 채용 공고 및 지원서를 채용절차에 맞추어 관리
        > - 기능 : 목록 조회 
        > - 구현 
        >   > - D - Day 정렬에 따라 지원서 목록들을 가로 스크롤로 보여줌
        >   > - 기업명 클릭 시 해당 기업 채용 상세 정보 모달 오픈
        >   > - 상태 클릭 시 상태 변경 모달 오픈(합격 및 탈락 상태 변경 기능)
        >   > - 상태 관리 통해 채용절차(서류 -> 시험 -> 면접)에 따른 지원서 관리
        ![스크린샷 2020-08-28 오후 2 57 48](https://user-images.githubusercontent.com/53922357/91526565-e6f0b400-e93e-11ea-95d6-bbc6f3c4bcf4.png)
        
    - Card (개발 완료)
        > 기업 채용 공고 상태 관리 및 사에 내용 조회
        > - 기능 : 상세 조회, 내용 수정, 상태 수정, 삭제
        > - 구현
        >   > - 수정 버튼 클릭 시 input box 활성화
        >   > - 삭제 버튼 클릭 시 삭제
        >   > - 상태 변경 : 합격 버튼 클릭 시 다음 전형으로 상태 변경 가능










