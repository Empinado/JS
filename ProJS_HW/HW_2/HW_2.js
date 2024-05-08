// Задание 1
// Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.

// Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.

// Реализуйте геттер allBooks, который возвращает текущий список книг.

// Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.

// Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.

console.log("Task #1");

class Library {
  #books = [];

  constructor(initialBooks = []) {
    const titles = new Set();

    initialBooks.forEach((book) => {
      if (titles.has(book.title)) {
        throw new Error(`Дубликат книги ${book.title} в начальном списке.`);
      }
      titles.add(book.title);
    });

    this.#books = [...initialBooks];
  }

  get allBooks() {
    return this.#books;
  }

  addBook(newBook) {
    //some проверяет соотвествует ли како-либо эл массива выражению в скобках
    const isBookExists = this.#books.some(
      (book) => book.title === newBook.title
    );
    //Поскольку мы производим операцию в isBookExists, в if благодаря оператору ! мы можем получить ложность или истинность выражения
    if (!isBookExists) {
      this.#books.push(newBook);
      console.log(`Книга ${newBook.title} успешно добавлена.`);
    } else {
      console.log(`Книга ${newBook.title} уже существует в библиотеке.`);
    }
  }

  removeBook(title) {
    const index = this.#books.findIndex((book) => book.title === title);

    if (index !== -1) {
      this.#books.splice(index, 1); //Метод splice() изменяет содержимое массива, удаляя существующие элементы и/или добавляя новые.
      console.log(`Книга ${title} успешно удалена из библиотеки.`);
    } else {
      throw new Error(`Книги ${title} нет в библиотеке.`);
    }
  }

  hasBook(title) {
    return this.#books.some((book) => book.title === title);
  }
}

const library = new Library();

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

const book1 = new Book("Война и Мир", "Толстой Л.Н.");
const book2 = new Book("Мартин Иден", "Джек Лондон");
const book3 = new Book("Мартин Иден", "Джек Лондон");
const book4 = new Book("1984", "Джордж Оруэлл");

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

console.log(library.allBooks);

library.removeBook("Мартин Иден");
console.log(library.allBooks);

console.log(library.hasBook("Война и Мир"));

const initialBooks = [book4, book3];

const library2 = new Library(initialBooks);
console.log(library2.allBooks);

// Задание 2
// Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные сообщения, вы решаете установить некоторые ограничения.

// Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером, где будут отображаться отзывы.

// Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами. Однако если длина введенного отзыва менее 50 или более 500 символов, функция должна генерировать исключение.

// При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.
console.log("Task #2");

const initialData = [
  {
    product: "Apple iPhone 13",
    reviews: [
      {
        id: "1",
        text: "Отличный телефон! Батарея держится долго.",
      },
      {
        id: "2",
        text: "Камера супер, фото выглядят просто потрясающе.",
      },
    ],
  },
  {
    product: "Samsung Galaxy Z Fold 3",
    reviews: [
      {
        id: "3",
        text: "Интересный дизайн, но дорогой.",
      },
    ],
  },
  {
    product: "Sony PlayStation 5",
    reviews: [
      {
        id: "4",
        text: "Люблю играть на PS5, графика на высоте.",
      },
    ],
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const reviewInput = document.getElementById("reviewInput");
  const submitReview = document.getElementById("submitReview");
  const reviewsContainer = document.getElementById("reviewsContainer");

  function addReview(text) {
    if (text.length < 10 || text.length > 500) {
      throw new Error("Длина отзыва должна быть от 50 до 500 символов.");
    }

    const reviewElement = document.createElement("div");
    reviewElement.textContent = text;
    reviewsContainer.appendChild(reviewElement);
  }

  submitReview.addEventListener("click", function () {
    const reviewText = reviewInput.value.trim();

    try {
      addReview(reviewText);
      reviewInput.value = "";
    } catch (error) {
      alert(error.message);
    }
  });

  // Добавляем начальные отзывы из initialData
  initialData.forEach((product) => {
    product.reviews.forEach((review) => {
      addReview(review.text);
    });
  });
});
