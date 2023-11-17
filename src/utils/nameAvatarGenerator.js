const FEMININE_ANIMALS = [`акула`, `белка`, `овца`, `змея`, `корова`, `утка`, `бабочка`, `лошадь`, `сова`, `мышь`];
const MALE_ANIMALS = [`конь`, `слон`, `бык`, `индюк`, `паук`, `варан`, `лось`, `ворон`, `тигр`, `носорог`];
const ADJECTIVES = [`Радиоактивн`, `Красив`, `Сильн`, `Смел`, `Умн`, `Грозн`, `Свиреп`, `Добр`, `Ехидн`, `Замечательн`];


async function getUserAvatar() {
  const charset = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const storage = [];
  
  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    storage.push(charset.charAt(randomIndex));
  }
  const hash = storage.join('');

  const address  = `https://robohash.org/` + hash;
  return address;

  //https://jsonplaceholder.typicode.com/ неожиданно перестал исправно работать, поэтому 
  //я поменял источник картинок для пользователей в последний момент. Оставлю код на всякий случай тут
  //
  // const imageNumber = Math.floor(Math.random() * 4999);
  // const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${imageNumber}`)
  // const avatar = await response.json();
  // return avatar.url;
}

 function randomNameGenerator() {
  const isMale = !!Math.floor(Math.random() * 2);
  return getRandomWord(ADJECTIVES) + ((isMale) ? "ый " + getRandomWord(MALE_ANIMALS) : "ая " + getRandomWord(FEMININE_ANIMALS));
}
function getRandomWord(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// module.exports = {getUserAvatar, randomNameGenerator};