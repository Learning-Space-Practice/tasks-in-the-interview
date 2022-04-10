// Напишите функцию copyArr(arr), которая копирует массив не изменяя иригинал.

const vegetables = ["Капуста", "Репа", "Редиска", "Морковка"];

function arrayClone(arr) {
  for (i = 0; i < arrayClone.length; i++) {
    console.log(arr[i]);
    arr.slice(0);
    // arr.push(arr[i])
  }
  return arr;
}

console.log(arrayClone(vegetables));

// 2. Преобразование массива в строку
// Напишите код, который преобразовывает и объединяет все
// элементы массива в одно строковое значение. Элементы массива будут разделены запятой.
//  Получите результат двумя разными методами.

const array = ["Капуста", "Репа", "Редиска", "Морковка"];
let str = array.toString();
console.log(str);

// Двоеточие между нечётными числами
// Напишите функцию colonOdd(num), которая принимает
//  число num в качестве аргумента и вставляет двоеточие (:) между двумя нечетными числами. Например, если
//  вводится число 55639217, то на выход должно быть 5:563:921:7.

const num = 554479;

const colonOdd = (num) => {
  let str = num.toString();
  let data = [str[0]];
  for (let i = 0; i < str.length; i++) {
    if (str[i] % 2 !== 0 && str[i + 1] % 2 !== 0) {
      data.push(":", str[i]);
    } else {
      data.push(str[i]);
    }
  }
  return console.log(data.join(""));
};
colonOdd(num); // 5:5

// Замена регистра символов
// Пользователь вводит строку кириллицей разного регистра. Напишите функцию,
// которая принимает строку в
//  качестве аргумента и заменяет регистр каждого символа на противоположный.
//   Например, если вводится «КаЖдЫй ОхОтНиК», то на выходе должен быть массив [кАжДыЙ оХоТнИк].

const str1 = "AbCdE";

const reserseCase = (str1) => {
  let data = [];
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] === str1[i].toUpperCase()) {
      data.push(str1[i].toLowerCase());
    } else {
      data.push(str1[i].toUpperCase());
    }
  }
  return console.log(data.join(""));
};
reserseCase(str1);

// Удалить повторяющиеся элементы массива
// Напишите функцию removeDuplicates(arr),
// которая возвращает массив, в котором удалены повторяющиеся
//  элементы
// из массива arr (игнорируйте чувствительность к регистру)

let arr = [
  "php",
  "php",
  "css",
  "css",
  "script",
  "script",
  "html",
  "html",
  "java",
];
function removeDuplicates(a) {
  let c = {};
  for (let i = 0; i < a.length; i++) {
    c[a[i]] = true;
  }
  return console.log(Object.keys(c));
}

removeDuplicates(arr);

// Найдите високосные годы
// Високосным годом является каждый четвертый год и века начинаются только
// на высокостные года, отличие високосного года от обычного заключается в появлении 366-го дня. Напишите
//  функцию chooseYears(start, end), которая принимает в качестве аргументов диапозон лет и возвращает массив
//   високосных лет в заданном диапазоне.

const chooseYears = (start, end) => {
  let years = [];
  for (let i = start; i < end; i++) {
    years.push(i);
  }
  return console.log(leapYear(years));
};
const leapYear = (year) => {
  let res = [];
  for (let i = 0; i < year.length; i++) {
    if (year[i] % 4 === 0) {
      res.push(year[i]);
    }
  }
  return res;
};
chooseYears(2000, 2020);


// Отобразить элементы в случайном порядоке
// Используя метод sort перепишите предсталенный ниже 
// код, который с помощью цикла for случайно изменяет порядок расстановки элементов массива.

const array1 = [0, 8, 2, 3, 4, 5, 6, 7, 8, 9];
const shuffle = (arr) => {
  arr.sort(function (a, b) {
    return 0.5 - Math.random();
  });
  return console.log(arr);
};

shuffle(array1);


// Получить первые элементы массива
// Напишите функцию getFirst(array, n), которая возвращает 
// фрагмент массива, содержащий первые 'n' элементов массива.


let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const getFirst = (array, n) => {
  let arrayRes = [];
  for (let i = 0; i < n; i++) {
    arrayRes.push(array[i]);
  }
  return arrayRes
};
console.log(getFirst(array2,8))



// Получить последние элементы массива
// Напишите функцию getLast(array, n), которая возвращает фрагмент 
// массива, содержащий последние 'n' элементов массива

let array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const getLost = (arra, n) => {
  console.log(arra.length-n)
  return arra.slice(arra.length - n);
};
console.log(getLost(array3, 1));
