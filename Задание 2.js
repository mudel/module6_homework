// 6.4 Параметры и возвращаемое значение Задание 2.
function primeTest(num) {
	if (num>1000) {console.log("Данные неверны");return;}
	if (num<2) {console.log("Число не простое");return;}
	for (i=2; i<num; i++) {
		if(num%i==0) {console.log("Число не простое"); return;}
			}
    console.log("Число простое"); return;
}
// let x = prompt("Введи число");
// primeTest(x);
