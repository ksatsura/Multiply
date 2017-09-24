module.exports = function multiply(first, second) {
var arr1 = first.split("").reverse(), // преобразование параметров в массив
    arr2 = second.split("").reverse(), // 
	result = []; // массив с результирующими значениями
	var temp, cur, next = next2 = 0;
	
for (var i = 0; i < arr1.length; i++) { // 
    var j = 0;
	for (; j < arr2.length; j++) {
		temp = arr1[i]*arr2[j] + next + next2;	// значение, получаемое при умножении и прибавление переносов от умножения предыдущего разряда
        cur = temp%10; // значение, остающееся после умножения в текущем разряде
		next = Math.floor(temp/10); // значение, переносящееся на следующий разряд
		if (result[i+j] == undefined) { // если данный разряд не проинициализирован
           result[i+j] = 0;
        }
		result[i+j] += cur; // значение, полученное при результирующем суммирование в разряде
		next2 = Math.floor(result[i+j]/10); // перенос в следующий разряд при результирующем сложнее значений
		result[i+j] = result[i+j]%10; // результируеще значение в разряде
	}
    result[i+j] = next + next2; // крайний разряд
    next = next2 = 0; // обнуление переносов
}
  return result.reverse().join('').replace(/^0+/, ""); // 
}
