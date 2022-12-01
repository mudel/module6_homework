// 6.7 Функции обратного вызова Задание 4. Вариант 2.
function dropper(c, d) {
		intervalId = setInterval (function () {
                                    if (c<=d){ 
                                    console.log(c);
                                    c++;
                                  } else return;}, 1000);
}
dropper (2,5);