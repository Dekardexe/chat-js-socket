
// function bindPicturesWithModalPics() {
//    const pictures = document.querySelectorAll(`.messagePicture`);
//    const picturesArray = Array.from(pictures)
//    picturesArray.forEach((el) => {
//       el.onclick = function () {
//          showModalPicture(el.firstChild.nextSibling.src)
//       }
//    })
// }

function showModalPicture(src) {
   const flag = window.getComputedStyle(document.querySelector(`.modalImage`)).getPropertyValue('display');
   document.querySelector(`.modalImage`).style = (flag == "none") ? "display: flex" : "display: none";
   const modalPicture = document.querySelector(`.modalImage`).firstChild.nextSibling;
   modalPicture.src = src;
}