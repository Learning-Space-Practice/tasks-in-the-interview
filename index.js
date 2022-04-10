// Завершите функцию, которая принимает два аргумента и возвращает все числа, которые делятся на данный делитель. Первый аргумент - это массив чисел, а второй - делитель.
// Пример
// divisibleBy([1, 2, 3, 4, 5, 6], 2) == [2, 4, 6]

const divisibleBy = (numbers, divisor) => {
  let res = [];
  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] % divisor === 0) {
      res.push(numbers[i]);
    }
  }
  return res;
};
divisibleBy([1, 2, 3, 4, 5, 6], 2);

// Ваша функция принимает два аргумента:
// текущий возраст отца (лет)
// текущий возраст сына (лет)
// Подсчитайте, сколько лет назад отец был вдвое старше сына (или через сколько лет он будет вдвое старше).

const twiceAsOld = (dadYearsOld, sonYearsOld) => {
  let res = Math.abs(dadYearsOld - sonYearsOld * 2);
  console.log(res);
  return res;
};
twiceAsOld(36, 7);

//   Считайте нечетные числа ниже n
//   Если задано число n, вернуть количество положительных нечетных чисел меньше n, ЛЕГКО!
//   Пример
//   oddCount(7) //=> 3, i.e [1, 3, 5]
//   oddCount(15) //=> 7, i.e [1, 3, 5, 7, 9, 11, 13]

const oddCount = (n) => {
  let res = [];
  for (let i = 0; i < n; i++) {
    if (i % 2 !== 0) {
      res.push(i);
    }
  }
  console.log(res);
  return res;
};
oddCount(10);

// Преобразуйте строку в число!
// Нам нужна функция, которая может преобразовывать строку в число. Какие способы добиться этого вы знаете?
// Примечание: не волнуйтесь, все входные данные будут строками, и каждая строка является вполне допустимым представлением целого числа.
// Пример
// stringToNumber('1234') == 1234
// stringToNumber('605') == 605
// stringToNumber('1405') == 1405
// stringToNumber('-7') == -7

const stringToNumber = (str) => {
  return Number(str);
  // return +str
};

// Создайте функцию updateRecord, которая принимает 4 парметра
// Первый параметр: коллекция, которую нужно обновить
// Второй параметр: id альбома, который необходимо обновить
// Третий парметр: свойство альбома которое необходимо обновить/добавить
// Четвертый парметр: значение, которое нужно присвоить свойству, указанное в предыдущем пункте
// Функция должна вернуть измененную коллекцию
// Если альбома с указанным id нет в коллекции, тогда необходимо добавить альбом в коллекцию
// Усли указанного свойства нет в записи альбома, тогда его следует добавить

var recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};

function updateRecord(obj, id, prop, value) {
  if (obj[id] === false) {
    obj[id] = prop;
    console.log(obj);
  } else if (obj[id].prop === false) {
    obj[id][prop] = value;
  }
  return console.log(obj);
}
updateRecord(recordCollection, 5439, "tracks", "12345");

// Сумма элементов двух массивов
// Напишите код, который создаёт массив элементов представляющих 
// собой сумму соответствующих элементов заданных массивов.

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [4, 5, 6];

const sumArr = (a, b) => {
  let arr3 = [];
  let count;
  if (a.length > b.length) {
    count = a.length;
  } else {
    count = b.length;
  }
  for (let i = 0; i < count; i++) {
    if (a[i] === undefined) {
      a.push(0);
    } else if (b[i] === undefined) {
      b.push(0);
    }
     arr3.push(a[i] + b[i]);
  }
  return arr3
};
console.log(sumArr(arr1,arr2))