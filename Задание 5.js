// 6.8 Функции в ES6 Задание 5.
function expo(x, n) {if (n==1) {return x;} else {return x*expo(x, --n);}}
console.log(expo(5, 3)); 