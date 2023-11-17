function refreshList(listClass, parentClass, content) {

   const list = document.querySelector(`.${listClass}`);
   const chat = document.querySelector(`.${parentClass}`);
   const newList = document.createElement(`div`);

   if(content !== undefined){
      newList.innerHTML = `${content}`
   }

   newList.className = `${listClass}`;
   chat.removeChild(list);
   chat.insertBefore(newList, chat.firstChild);
}