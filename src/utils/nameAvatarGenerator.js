const FEMININE_ANIMALS = [`акула`, `белка`, `овца`, `змея`, `корова`, `утка`, `бабочка`, `лошадь`, `сова`, `мышь`];
const MALE_ANIMALS = [`конь`, `слон`, `бык`, `индюк`, `паук`, `варан`, `лось`, `ворон`, `тигр`, `носорог`];
const ADJECTIVES = [`Радиоактивн`, `Красив`, `Сильн`, `Смел`, `Умн`, `Грозн`, `Свиреп`, `Добр`, `Ехидн`, `Замечательн`];
const CHARSET = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const IMAGE_URL = `https://robohash.org/`;

async function getUserAvatar() {
  const storage = [];
  
  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * CHARSET.length);
    storage.push(CHARSET.charAt(randomIndex));
  }
  const buff = storage.join('');

  const address  = IMAGE_URL + buff;
  return address;
}

function randomNameGenerator() {
  const isMale = !!Math.floor(Math.random() * 2);
  return getRandomWord(ADJECTIVES) + ((isMale) ? "ый " + getRandomWord(MALE_ANIMALS) : "ая " + getRandomWord(FEMININE_ANIMALS));
}

function getRandomWord(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
