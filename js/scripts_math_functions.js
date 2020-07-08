 // // 1) Работа с %

 function ostDevide1(number1, number2) {
 	return number1 % number2;
 };
 console.log (ostDevide1(10,3));

// 2) Работа с %

 function ostDevide2(number1, number2) {
 	const result = number1 % number2;
 	if (result === 0) {
 		console.log ('Делится', (number1/number2) )
 	}
 	else console.log ('Не делится', (number1/number2), result );
};
ostDevide2(10,3);

// 3) Работа со степенью и корнем
const st = Math.pow(2, 10);
console.log (st);

// 4) Работа со степенью и корнем

console.log (Math.sqrt(245));
 

// 5) Работа со степенью и корнем.

const currentArray = [4, 2, 5, 19, 13, 0, 10];
let resultSum = 0;
for (let i = 0; i < currentArray.length; i++) {
	resultSum +=  Math.pow(currentArray[i], 3);
};
console.log (Math.sqrt(resultSum));


// 6) Работа с функциями округления

const number = 379;
console.log(Math.round(Math.sqrt(number)));
console.log((Math.sqrt(number)).toFixed(1));
console.log((Math.sqrt(number)).toFixed(2));
console.log((Math.sqrt(number)).toFixed(3));

// 7) Нахождение максимального и минимального числа

const dataArray = [4, -2, 5, 19, -130, 0, 10];
console.log(Math.max(...dataArray));
console.log(Math.min(...dataArray));


// 8) Работа с рандомом

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
console.log(Math.round(getRandomArbitrary(1, 100)));

// Заполните массив 10-ю случайными целыми числами. (Подсказка: нужно воспользоваться циклами for или while).

// 9) Работа с рандомом

function getRandomArbitrary(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
let newArray = [];
for (let i = 0; i < 10; i++) {
	newArray[i] = getRandomArbitrary(1, 100);
};
console.log(newArray);


// 10) Работа с модулем

const a = 100;
const b = -20;
console.log(Math.abs(a) - Math.abs(b));


// 11) Работа с модулем

const a1 = 6;
const b1 = 1;
const c1 = Math.abs(a1 - b1);
console.log(c1);


// Дан массив arr. Найдите среднее арифметическое его элементов. Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.
const userArray = [12, 15, 20, 25, 59, 79];
const middleAriph = (accumulator, currentValue) => accumulator + currentValue;
console.log(userArray.reduce(middleAriph) / userArray.length);

// Напишите скрипт, который будет находить факториал числа. 
// Факториал (обозначается !) - это произведение (умножение) всех целых чисел, 
// меньше данного, и его самого. Например, 4! = 1*2*3*4.


function factorial(currentNumber) {
  return (currentNumber != 1) 
  	? currentNumber * factorial(currentNumber - 1) 
  	: 1;
}

console.log (factorial(3));

