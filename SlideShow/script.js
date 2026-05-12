let slideIndex = 0; // Текущий индекс слайда

// Функция для показа слайдов
function showSlides() {
    let i;

    // Получаем все элементы с классом mySlides, dot
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    // Скрываем все слайды
    for(let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Увеличиваем индекс для перехода к следующему слайду
    slideIndex++;

    // Если дошли до конца - возвращаемся к первому
    if(slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Убираем активный класс со всех точек
    for(let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", ""); 
    }

    // Показываем текущий слайд
    slides[slideIndex-1].style.display = "block";

    // Добавляем активный класс к текущей точке
    dots[slideIndex-1].className += " active";

    // Запускаем функцию снова через 3 секунды
    setTimeout(showSlides, 3000);
}


showSlides()