function showModalPicture(src) {
   const flag = window.getComputedStyle(document.querySelector(`.modalImage`)).getPropertyValue('display');

   document.querySelector(`.modalImage`).style = (flag == "none") ? "display: flex" : "display: none";

   const modalPicture = document.querySelector(`.modalImage`).firstChild.nextSibling;

   modalPicture.src = src;
}