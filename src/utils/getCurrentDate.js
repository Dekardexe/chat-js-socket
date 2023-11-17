function getCurrentDate() {
   const date = new Date();
   const hours = (Math.floor(date.getHours() / 10)) < 1 ? ("0" + date.getHours()) : date.getHours();
   const minutes = (Math.floor(date.getMinutes() / 10)) < 1 ? ("0" + date.getMinutes()) : date.getMinutes();
   return hours + ":" + minutes;
}