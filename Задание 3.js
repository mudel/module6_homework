// 6.5 Функции высшего порядка Задание 3.
function f1(num1) {
	return function(num2) {
		return num1+num2;
	}
}
let f2 = f1(4)
console.log(f2(6));