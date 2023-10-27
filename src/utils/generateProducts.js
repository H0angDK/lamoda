const CATEGORY = ['Майка', 'Тяги', 'Джинсы', 'Брюки', 'Кепка', 'Носки', 'Брюки', 'Шуба', 'Платье', 'Юбка'];
const COLOR = ['Красный', 'Серый', 'Белый', 'Черный', 'Синий', 'Зеленый'];
let a = 1;
export const getProducts = (count = 30) => {
    return Array(count).fill({}).map((_) => ({
        id: a++,
        name: getRandomString(getRandomNumber(2, 12)),
        description: getRandomText(),
        price: getRandomNumber(0, 1000) + getRandomNumber(0, 1000) / 100,
        rating: getRandomNumber(0, 4) + getRandomNumber(0, 10) / 10,
        category: CATEGORY[getRandomNumber(0, CATEGORY.length - 1)],
        color: COLOR[getRandomNumber(0, COLOR.length - 1)],
        image: `https://via.placeholder.com/600/${generateHEX()}`
    }));
}
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const getRandomString = (length) => Math.random().toString(36).substring(2, length + 2);

const getRandomText = () => Array(getRandomNumber(2, 6)).fill('').map((_) => getRandomString(getRandomNumber(2, 12))).join(' ');

const generateHEX = () => Math.random().toString(16).substring(2,8)