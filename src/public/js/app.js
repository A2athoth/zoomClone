const messageList = document.querySelector("ul");
const nickForm = document.querySelector("#nick");
const currentNick = document.querySelector("#currentNick");
const nickNameBtn = document.querySelector("#nickNameBtn");
const messageForm = document.querySelector("#message");

let socket;
if (window.location.protocol === 'http:') {
    socket = new WebSocket(`ws://${window.location.host}`);
} else if (window.location.protocol === 'https:') {
    socket = new WebSocket(`wss://${window.location.host}`);
}

function makeMessage(type, payload) {
    const msg = { type, payload };
    return JSON.stringify(msg);
}

function handleOpen() {
    console.log("Connected to Server ✅");
}

socket.addEventListener("open", handleOpen);

socket.addEventListener("message", (message) => {
    const li = document.createElement("li");
    li.innerText = message.data;
    messageList.append(li);
});

socket.addEventListener("close", () => {
    console.log("Disconnected from Server ❌");
});

function handleSubmit(event) {
    event.preventDefault();
    const input = messageForm.querySelector("input");
    socket.send(makeMessage("new_message", input.value));
    input.value = "";
}

function handleNickSubmit(event) {
    event.preventDefault();
    const input = nickForm.querySelector("input");
    socket.send(makeMessage("nickname", input.value));
    currentNick.innerText = `Current Nickname: ${input.value}`;
    input.value = "";
    nickNameBtn.innerText = "Change";
}

messageForm.addEventListener("submit", handleSubmit);
nickForm.addEventListener("submit", handleNickSubmit);
