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




npm run dev 하면 서버 돌아감
