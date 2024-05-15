// Создайте интерактивную веб-страницу для оставления и просмотра отзывов о продуктах. Пользователи могут добавлять отзывы о различных продуктах и просматривать добавленные отзывы.

// Страница добавления отзыва:

// Поле для ввода названия продукта.
// Текстовое поле для самого отзыва.
// Кнопка "Добавить отзыв", которая сохраняет отзыв о продукте в LocalStorage.

// Страница просмотра отзывов:

// Показывает список всех продуктов, о которых были оставлены отзывы.
// При клике на название продукта отображается список всех отзывов по этому продукту.
// Возможность удаления отзыва (при нажатии на кнопку "Удалить" рядом с отзывом, данный отзыв удаляется из LocalStorage).

const inputName = document.getElementById("input_name");
const inputReview = document.getElementById("input_review");
const conteiner = document.getElementById("container");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  if (inputName.value && inputReview.value !== "") {
    localStorage.setItem(inputName.value, inputReview.value);
  } else {
    alert("Заполните все поля для отзыва");
  }
});
