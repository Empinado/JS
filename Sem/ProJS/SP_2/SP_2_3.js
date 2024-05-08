const comment = document.querySelector(".comment"); //создаем переменные и привязываем их к блокам в html с соотвествующими классами
const btn = document.querySelector(".btn");
const num = document.querySelector(".num");
//По классу присваеваем ивент для кнопки, в скобках aEL обозначаем, что функция дальше срабатывает по клику на нашу кнопку.
btn.addEventListener("click", function (e) {
  try {
    const inputElement = num.value; //присваеваем содержание инпута в переменную, ввод пользователя
    //Если элемент не является числом, то выдаем ошибку
    if (isNaN(inputElement)) {
      throw new Error("Значение не является числом");
    }
    comment.textContent = "Вы ввели число"; //Если число то выводим в контентный блок comment текст. textContent добавляет текстовый контент в блок
  } catch (error) {
    comment.textContent = error.message; //Если какая-то ошибка, то выводим ее сообщение
  }
});
