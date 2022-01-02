# Noom

Zoom Clone using NodeJS, WebRTC and Websockets.




## Memo


프로젝트명 폴더 만들고
현재 경로에서 npm init -y

초기세팅 대충 하기 package.json 및 readme 설명 수정 및 추가

npm i nodemon -D

babel.config.json 파일 생성
nodemon.json
src 폴더 생성
server.js

npm i @babel/core @babel/cli @babel/node @babel/preset-env -D
.gitignore만들기
기본 node용 예외처리

nodemon.json에 명령어 추가
{
"exec": "babel-node src/server.js"
}

babel.config.json에 명령어 추가
{
"presets": ["@babel/preset-env]
}

------------------------------------------------

npm i express pug

src/server.js 수정




### npm run dev 하면 서버 돌아감

nodemon.json에 이렇게 수정하면 public 안에 파일들 수정해도 서버 재시작 안됨
{
"ignore": ["src/public/*"],
"exec": "babel-node src/server.js"
}


### http와 ws 서버 동시 사용
zoom 강의 1.2참조

http서버 위에 webSocket서버 만듬(당연히 항상 그래야하는건 아님. 하나만 필요시 그래도 됨)
이러는 이유는 우리의 서버를 만들고(보이게 노출) 그 다음 http서버 위에 ws 서버를 만들기 위해

http://localhost:3000
ws://localhost:3000

### admin ui  사용법

서버 돌리기

private 브라우져에서 https://admin.socket.io/ 들어가기

서버 url : http://localhost:3000/admin

path : 없앰

connect
