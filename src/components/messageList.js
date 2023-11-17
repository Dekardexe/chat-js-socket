function setupSocket(socket) {
   socket.on('sendMessageFromServer', (message) => {
      renderMessage(message);
      scrollMessageList();
   });
   
   socket.on('messageListFromServer', (messages) => {
      if(messages.length === 0){
         document.querySelector(`.messageListLoader`).style = "display: none";
      }
      else{
         refreshList('list', 'chat');
   
         messages.forEach(message => {
            renderMessage(message);
         });
   
         scrollMessageList();
      }
   });
}

setupSocket(socket);

function clickPicture(image) {
   showModalPicture(image);
}

function renderMessage(message) {
   const messageLsit = document.querySelector(`.list`);
   const newMessage = document.createElement('div');

   const isMe = ((sessionStorage['userName'] === message.name) && (sessionStorage['userAvatar'] === message.avatar))
      ? "myMessage" : "message";
   const hasPicture = (message.image) ? "textWithImage" : "";


   const imageHTMLSource = (message.image) ? `
   <div class="messagePicture" onclick=clickPicture("${message.image}")>
      <img src=${message.image}></img>
   </div>` : "";

   newMessage.innerHTML =
      `
      <div class=${isMe}>
      <div class="gridContainer">
         <div class='messageAvatar'><img src=${message.avatar}></img></div>
         <div class='messageName'>
            <p>${message.name}</p>
            <p class='messageTime'>${message.date}</p>
         </div>
         <p class="messageText ${hasPicture}">${message.text}</p>
         ${imageHTMLSource}
      </div>
   </div>
   `

   messageLsit.appendChild(newMessage);
}

function scrollMessageList() {
   const el = document.querySelector('.list');
   if ((el.scrollHeight - el.scrollTop) < window.innerHeight * 2) {
      el.scrollBy(0, el.scrollHeight);
   }
}