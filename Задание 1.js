// 6.2 Функции без параметров Задание 1.
Поскольку модуль называется "Функции без параметров", предполагаем, что их не надо передавать в функцию)
function evenAndOdd() {
	let nul = 0;
	let even = 0;
	let odd = 0;
	 for (s in arr) {
		if ((typeof(arr[s]) === 'number')&(!Number.isNaN(arr[s]))) {
			if (arr[s]==0) {nul++}
				else {
					if (arr[s]%2 == 0) {even++}
			 	 		else {odd++}
			}
		}
	 }
	console.log("Нулей - "+nul+"\nЧетных - "+even+"\nНечетных - "+odd);
}

let arr = [3, 8, "apple", 0, 22, 14, false, null, 4, 15, 0];
evenAndOdd();
