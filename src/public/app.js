const socket = io();

const welcome = document.getElementById("welcome");
const form = welcome.querySelector("form");
const room = document.getElementById("room");

room.hidden = true;

let roomName;

function addMessage(message) {
    const ul = room.querySelector("ul");
    const li = document.createElement("li");
    li.innerText = message;
    ul.appendChild(li);
}

function handleMessageSubmit(event) {
    event.preventDefault();
    const input = room.querySelector("#msg input");
    const value = input.value;
    socket.emit("new_message", input.value, roomName, () => {
        addMessage(`You: ${value}`);
    });
    input.value = "";
}

function handleNicknameSubmit(event) {
    event.preventDefault();
    const input = room.querySelector("#name input");
    const value = input.value;
    socket.emit("nickname", input.value, roomName, () => {
        addMessage(`You changed your nickname to "${value}"`);
    });
    input.value = "";
    document.querySelector("#nickNameBtn").innerText = "Change";
    document.querySelector("#currentNickname").innerText = " "+value;
}

function showRoom(count) {
    welcome.hidden = true;
    room.hidden = false;
    const h3 = room.querySelector("h3");
    if (!!count) {
        h3.innerText = `Room ${roomName} (${count}명)`;
    } else {
        h3.innerText = `Room ${roomName}`;
    }
    const msgForm = room.querySelector("#msg");
    const nameForm = room.querySelector("#name");
    msgForm.addEventListener("submit", handleMessageSubmit);
    nameForm.addEventListener("submit", handleNicknameSubmit);
}

function handleRoomSubmit(event) {
    event.preventDefault();
    const input = welcome.querySelector("#welcome input");
    socket.emit("enter_room", input.value, showRoom);
    roomName = input.value;
    input.value = "";
}

form.addEventListener("submit", handleRoomSubmit);
socket.on("welcome", (user, newCount) => {
    const h3 = room.querySelector("h3");
    h3.innerText = `Room ${roomName} (${newCount}명)`;
    addMessage(`${user} arrived!`);
});

socket.on("bye", (left, newCount) => {
    const h3 = room.querySelector("h3");
    h3.innerText = `Room ${roomName} (${newCount}명)`;
    addMessage(`${user} left ㅠㅠ`);
});

socket.on("new_message", addMessage);

socket.on("room_change", (rooms)=>{
    console.log(rooms);
    const roomList = welcome.querySelector("ul");
    roomList.innerText = "";
    if (rooms.length === 0) {
        return
    }
    rooms.forEach((room)=>{
        const li = document.createElement("li");
        li.innerText = room;
        roomList.append(li);
    });
})
