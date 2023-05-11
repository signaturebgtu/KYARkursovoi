// Получаем ссылку на иконку бургер-меню
const burgerIcon = document.querySelector('.burger');

// Получаем ссылку на список меню
const menuList = document.querySelector('.ul1');

// Добавляем обработчик события клика на иконку бургер-меню
burgerIcon.addEventListener('click', () => {
  // Добавляем или удаляем класс "active" у иконки
  burgerIcon.classList.toggle('active');
  
  // Показываем или скрываем список меню
  menuList.classList.toggle('active');
});
var contentDiv = document.getElementById('rooms');

data.sections.forEach(section => {
    var sectionElement = document.createElement('price');
    sectionElement.setAttribute('class', section.class);

    var divElement = document.createElement('bed');
    divElement.setAttribute('class', section.div.class);

    var pElement = document.createElement('room');
    pElement.textContent = section.div.p;

  
});
