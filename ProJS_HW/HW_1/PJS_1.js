// Задание 1
// • Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать. Каждая итерация должна возвращать следующий альбом из коллекции.

// • Создайте объект musicCollection, который содержит массив альбомов и имеет свойство-символ Symbol.iterator. Каждый альбом имеет следующую структуру:

// {
// title: "Название альбома",
// artist: "Исполнитель",
// year: "Год выпуска"
// }

// • Реализуйте кастомный итератор для объекта musicCollection. Итератор должен перебирать альбомы по порядку.
// • Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате: Название альбома - Исполнитель (Год выпуска)

console.log('Task_1');

const musicCollection = [
    { title: "title1", artist: "artist1", year: "1991" },
    { title: "title2", artist: "artist2", year: "1992" },
    { title: "title3", artist: "artist3", year: "1993" }
]

console.log(musicCollection);

musicCollection[Symbol.iterator] = function() {
    return {
        current: 0, //начало отсчета
        to: this.length, //конец отсчета
        next() {
            return this.current < this.to ? { done: false, value: musicCollection[this.current++] } : { done: true };
        }
    }
}

for (let album of musicCollection) {
    console.log(`Title: ${album.title}, Artist: ${album.artist}, ${album.year}`);
}


// Задание 2
// Вы управляете рестораном, в котором работают разные повара, специализирующиеся на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.

// Необходимо создать систему управления этими заказами, которая позволит:

// • Отслеживать, какой повар готовит какое блюдо.
// • Записывать, какие блюда заказал каждый клиент.

// Используйте коллекции Map для хранения блюд и их поваров, а также для хранения заказов каждого клиента. В качестве ключей для клиентов используйте объекты.

// Повара и их специализации:

// Виктор - специализация: Пицца.
// Ольга - специализация: Суши.
// Дмитрий - специализация: Десерты.

// Блюда и их повара:

// Пицца "Маргарита" - повар: Виктор.
// Пицца "Пепперони" - повар: Виктор.
// Суши "Филадельфия" - повар: Ольга.
// Суши "Калифорния" - повар: Ольга.
// Тирамису - повар: Дмитрий.
// Чизкейк - повар: Дмитрий.

// Заказы:

// Клиент Алексей заказал: Пиццу "Пепперони" и Тирамису.
// Клиент Мария заказала: Суши "Калифорния" и Пиццу "Маргарита".
// Клиент Ирина заказала: Чизкейк.

console.log('Task_2');

let cooks = new Map([
    ['Виктор', 'Пицца'],
    ['Ольга', 'Суши'],
    ['Дмитрий', 'Десерты']
]);

let dishes = new Map([
    ['Пицца "Маргарита"', 'Виктор'],
    ['Пицца "Пепперони"', 'Виктор'],
    ['Суши "Филадельфия"', 'Ольга'],
    ['Суши "Калифорния"', 'Ольга'],
    ['Тирамису', 'Дмитрий'],
    ['Чизкейк', 'Дмитрий'],
]);

const alexeyOrder = new Set().add('Пицца Пипперони')
    .add('Десерт Тирамису');
const mariaOrder = new Set().add('Суши Калифорния')
    .add('Пицца Маргарита');
const irinaOrder = new Set().add('Десерт Чизкейк');

const customers = new Map();
customers.set('Алексей', alexeyOrder);
customers.set('Мария', mariaOrder);
customers.set('Ирина', irinaOrder);

for (let client of customers.keys()) {
    console.log(`Клиент ${client} заказал: ${[...customers.get(client)]}`);
}