// Функция открытия вкладки. Принимает событие (evt) и название города (cityName)
function openCity(evt, cityName) {
  // Объявляем переменные:
  // i - счетчик для циклов
  // tabcontent - коллекция всех элементов с классом "tabcontent"
  // tablinks - коллекция всех элементов с классом "tablinks"
  var i, tabcontent, tablinks;

  // Получаем все элементы с классом "tabcontent" (это блоки с содержимым вкладок)
  tabcontent = document.getElementsByClassName("tabcontent");
  
  // Проходим по всем вкладкам с содержимым и скрываем их
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none"; // Устанавливаем display: none (невидимо)
  }

  // Получаем все кнопки-вкладки (элементы с классом "tablinks")
  tablinks = document.getElementsByClassName("tablinks");
  
  // Проходим по всем кнопкам и удаляем у них класс "active"
  // (чтобы подсветка перешла на новую активную кнопку)
  for (i = 0; i < tablinks.length; i++) {
    // replace(" active", "") убирает подстроку " active" из названия класса
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Показываем нужную вкладку: получаем элемент по id (cityName) и ставим display: block
  document.getElementById(cityName).style.display = "block";
  
  // Добавляем класс "active" к кнопке, на которую кликнули
  // evt.currentTarget - это элемент, на котором сработало событие (нажатая кнопка)
  // Добавляем пробел и "active", чтобы не затереть существующие классы
  evt.currentTarget.className += " active";
}

// Добавьте в конец файла script.js
document.addEventListener("DOMContentLoaded", function() {
    // Скрываем все вкладки
    var tabcontents = document.getElementsByClassName("tabcontent");
    for (var i = 0; i < tabcontents.length; i++) {
        tabcontents[i].style.display = "none";
    }
    // Показываем первую и активируем её кнопку
    document.getElementById("London").style.display = "block";
    document.getElementsByClassName("tablinks")[0].className += " active";
});


// Добавьте в script.js
document.querySelectorAll('.tablinks').forEach((btn, index) => {
    btn.addEventListener('keydown', (e) => {
        const buttons = document.querySelectorAll('.tablinks');
        if (e.key === 'ArrowRight') {
            buttons[(index + 1) % buttons.length].focus();
            buttons[(index + 1) % buttons.length].click();
        } else if (e.key === 'ArrowLeft') {
            buttons[(index - 1 + buttons.length) % buttons.length].focus();
            buttons[(index - 1 + buttons.length) % buttons.length].click();
        }
    });
});