registerUser();

socket.on('userListFromServer', (users) => {
   content = `<h1 class="userCounter">Всего пользователей: </h1>`;
   refreshList('userList', 'chat', content);

   const userCounter = users.length;
   document.querySelector(`.userCounter`).textContent = "Всего пользователей: " + userCounter;

   users.forEach((user) => {
      renderUser(user);
   })
});


function renderUser(user) {
   const userList = document.querySelector(`.userList`)
   const newUser = document.createElement(`div`);

   newUser.innerHTML =
      `<div class='userInList'>
      <img src=${user.avatar}></img>
      <div class='userNameInList'>
         <p >${user.name}</p>
      </div>
   </div>`


   userList.appendChild(newUser);
   const imageDiv = newUser.firstChild;

   const loader = document.createElement(`img`);
   loader.src = "../assets/preloader/22.gif";
   loader.className = "eachUserLoader";

   const image = imageDiv.firstChild.nextSibling;
   image.style = "display: none";
   image.addEventListener('load', ()=> {
      loader.style = "display: none";
      image.style = "display: static";
   });
   
   imageDiv.insertBefore(loader, imageDiv.firstChild);
}

function registerUser() {
   const userName = randomNameGenerator();

   new Promise(function (res, _rej) {
      res(getUserAvatar());
   }).then(
      (userAvatar) => {
         socket.emit('enter', { name: userName, avatar: userAvatar });
         sessionStorage['userAvatar'] = userAvatar;
         sessionStorage['userName'] = userName;
      }
   ).catch((error) => {
      console.log(error)
   });
}
