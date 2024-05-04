// //add metadata

// function addMetadata(book, metadataType, data) {
//     book[metadataType] = data;
// }

// //Функиця для извлечения метаданных из объекта

// function getMetaData(book, metadataType) {
//     return book[metadataType];
// }


// // Создаие объекта книги и добавления метаданных

// const book = {
//     title: "1968",
//     author: "George Orwell"
// };

// const reviewSybol = Symbol('review');
// const ratingSymbol = Symbol('rating');
// const tagsSymbol = Symbol('tags');

// addMetadata(book, reviewSybol, 'nice book');
// addMetadata(book, ratingSymbol, 5);
// addMetadata(book, tagsSymbol, 'destopia');

// console.log(book);

// console.log(getMetaData(book, reviewSybol));
// console.log(getMetaData(book, tagsSymbol));
// console.log(getMetaData(book, ratingSymbol));

const musicCollection = [
    { title: "Ураган", artist: "Агата Кристи", year: "1998" },
    { title: "Группа крови", artist: "Кино", year: "1988" },
    { title: "Камнем по голове", artist: "Король и Шут", year: "1996" },
];

musicCollection[Symbol.iterator] = function() {
    return {
        current: 0,
        to: this.length,
        next() {
            return this.current < this.to ? { done: false, value: musicCollection[this.current++] } :
                { done: true };
        }
    }
}

for (let musicAlbum of musicCollection) {
    console.log(`Название: ${musicAlbum.title}, Исполнитель: ${musicAlbum.artist}, Год выпуска: ${musicAlbum.year}`);
}