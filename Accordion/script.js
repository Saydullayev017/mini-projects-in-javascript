// Получаем все элементы с классом "accordion" (все кнопки)
let acc = document.getElementsByClassName("accordion");
let i;

// Проходим по всем кнопкам аккордеона
for(i = 0; i < acc.length; i++) {
    // Добавляем обработчик события клика на каждую кнопку
    acc[i].addEventListener("click", function() {
        // Переключаем класс "active" у нажатой кнопки
        this.classList.toggle("active");

        // Находим следующую панель (следующий элемент после кнопки)
        let panel = this.nextElementSibling;

        // Проверяем, открыта ли сейчас панель (есть ли inline-стиль maxHeight)
        if (panel.style.maxHeight) {
            // Если открыта - закрываем, устанавливая maxHeight в null
            panel.style.maxHeight = null;
        } else {
            // Если закрыта - открываем, устанавливая высоту равную реальной высоте контента
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    })
}


// let panel = this.nextElementSibling;

// if(panel.style.display === "block"){
//     panel.style.display = "none";
// }else {
//     panel.style.display = "block";
// }