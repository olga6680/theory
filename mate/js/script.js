'use strict';
// Создай функцию countMs, которая принимает строку text и возвращает количество букв 'm' в ней (и больших и маленьких вместе).Создай функцию countMs, которая принимает строку text и возвращает количество букв 'm' в ней (и больших и маленьких вместе).

// const countMs = (text) => {
//     let count = 0;

//     for (const letter of text) {
//       if (letter.toLowerCase() === 'm') ++count;
//     }

//     return count;
//   }

// countMs('document') === 1
// countMs('Mermaid') === 2 // нужно считать и 'm', и 'M'
// countMs('code') === 0

////////////////////////

// Наш новый босс, как оказалось, просто ненавидит гласные буквы, поэтому нам нужно убрать их из всей документации.

// Напиши функцию removeVowels, которая принимает строку doc и возвращает строку, где все гласные из doc удалены.

// Гласными для этой задачи считаются буквы aeiouy в любом регистре.

// function removeVowels(doc) {
//     // write code here
//       let al = [ 'a', 'e', 'i', 'o', 'u', 'y',
//                  'A', 'E', 'I', 'O', 'U', 'Y' ];
//       let result = "";

//       for(let i = 0; i < doc.length; i++)
//       {

//           if (!al.includes(doc[i]))
//           {
//               result += doc[i];
//           }
//       }
//       return result;
//   }

// removeVowels('document') === 'dcmnt'
// removeVowels('I like my boss') === ' lk m bss'
// removeVowels('350 euro') === '350 r'


//////////////////////////

// Создай функцию makeAbbr, которая принимает строку из слов words и возвращает аббревиатуру из них в верхнем регистре.

// Строка words содержит одно или несколько слов, разделенных одним пробелом.

// function makeAbbr(words) {

//     return words
//       .split(' ')
//       .reduce((prevVal, curWord) => prevVal + (curWord ? curWord[0]: ''), '')
//       .toUpperCase()

//   } 

// makeAbbr('national aeronautics space administration') === 'NASA'
// makeAbbr('central processing unit') === 'CPU'
// makeAbbr('simplified molecular input line entry specification') === 'SMILES'


/////////


// Создай функцию decryptMessage, которая принимает строку message и возвращает строку, где символы из message расположены в обратном порядке.

// function decryptMessage(message) {
//     let result = "";
//     // write code here
//     for (let i = message.length - 1; i >= 0; i--) {
//       result += message[i];
//     }
//     return result;
//   }

// decryptMessage('!!!reeb gniknird ekil eW') === 'We like drinking beer!!!'
// decryptMessage('0202 ni eb lliw cimednap surivanoroc A') === 'A coronavirus pandemic will be in 2020'


/////////


// Создай функцию isWerewolf, которая принимает строку target и возвращает true, если это оборотень, или false, если это не так.

// Оборотень — это слово или предложение, которое читается в обоих направлениях одинаково, при этом игнорируя регистр, пробелы и знаки препинания.

// isWerewolf('rotator') === true // rotator --> rotator
// isWerewolf('home') === false // home --> emoh
// isWerewolf('Racecar') === true // регистр игнорируется
// isWerewolf('eva, can i see bees in a cave') === true // пробелы и знаки препинания игнорируются


///////


// Мы усовершенствовали нашу программу для сбора статистики по вебинарам Миши. Теперь после сбора статистики, она отправляет данные на сервер в виде строки 111001010111011, где 1 - это студент, который понял тему, а 0 - соответственно, нет.

// Было бы полезно понимать сколько процентов группы усвоили материал, это покажет насколько вебинар был эффективен.

// Создай функцию getSuccessRate которая будет принимать, строку statistic, и возвращать процент студентов, которые поняли материал, округляя до ближайшего целого (используй Math.round(result) для округления).

// function getSuccessRate(statistic) {
//     let result = 0;
//     let sumStudents = 0;
//     let percent = 0;

//     if (statistic.length !== 0) {
//       sumStudents = statistic.length;
//     } else {
//       sumStudents = 1;
//     }

//     for (let i = 0; i < statistic.length; i++) {
//         if (statistic[i] === '1') {
//             result++;
//         }

//     }

//     percent = Math.round(100 * result / sumStudents);

//     return percent;
// }

// getSuccessRate('11100') === 60
// getSuccessRate('1100') === 50
// getSuccessRate('000000') === 0
// getSuccessRate('11111') === 100
// getSuccessRate('') === 0


///////

// Напиши функцию createArray, которая принимает целое число N и возвращает массив, содержащий все целые числа от 1 до N включительно.

// Если N = 0, верни пустой массив.

// function createArray(N) {
//     let numbers = [];

//     for (let i = 1; i <= N; i++) {

//         if (N !== 0) {
//             numbers.push(i);
//         }
//         numbers;
//     }

//     return numbers;
// }

// createArray(1) === [1]
// createArray(3) === [1, 2, 3]
// createArray(0) === []


/////////////////

// Пришло время запускать массовое производство роботов! Чтобы роботы на линии собирались правильно, нужно маркировать детали. Разные части робота будут состоять из разного количества деталей. Давай сделаем наклейки для них!

// Напиши программу для принтера makeStickers, которая принимает число detailsCount и строку robotPart. Функция должна возвращать массив строк в следующем формате: {{robotPart}} detail #{{n}} (например Hand detail #1).

// Если detailsCount = 0, верни пустой массив.

// function makeStickers(detailsCount, robotPart) {
//     // write code here
//     let arrDetailCount = [];

//     for (let i = 1; i <= detailsCount; i++) {

//       if (detailsCount !== 0) {
//         arrDetailCount.push(`${robotPart} detail #${i}`);
//       }
//       arrDetailCount;    
//     }
//     return arrDetailCount;
//   }

// makeStickers(3, 'Body') === ['Body detail #1', 'Body detail #2', 'Body detail #3']
// makeStickers(4, 'Head') === ['Head detail #1', 'Head detail #2', 'Head detail #3', 'Head detail #4']
// makeStickers(0, 'Foot') === []


///////////////////////

// Наклейки готовы? Хорошо, нужно увеличивать производительность наших линий в два раза! Раньше мы там только попкорн готовили.

// Напиши функцию doublePower, которая принимает массив мощностей currentPowers и возвращает новый массив удвоенных мощностей.

// function doublePower(currentPowers) {
//     // write code here
//     let value = [];

//     for (let i = 0; i < currentPowers.length; i++) {

//         value.push(currentPowers[i] *= 2);
//     }

//     console.log(value);
//     return value;
// }

// doublePower([100, 150, 200, 220]) === [200, 300, 400, 440]
// doublePower([45, 34, 56, 67]) === [90, 68, 112, 134]
// doublePower([]) === []


//////////////////////////////

// Давай научим наших роботов сортировать коробки на складе. Все коробки пронумерованы, и роботы учатся сортировать их по возрастанию.

// Но сортировка — дело нелёгкое, иногда случаются ошибки. Поэтому нам пока придется проверять правильно ли робот отсортировал коробки.

// Напиши функцию isSorted, которая получает массив чисел boxNumbers и возвращает true, если все числа в порядке возрастания, или false, если это не так. Числа могут повторяться.

// function isSorted(boxNumbers) {
//     for (let i = 1; i < boxNumbers.length; i++) {
//         if (boxNumbers[i - 1] > boxNumbers[i]) return false;
//     }
//     return true;
// }

// isSorted([1, 2, 3, 4, 5]) === true
// isSorted([0, 1, 1, 1, 2]) === true
// isSorted([1, 2, 11]) === true
// isSorted([5]) === true
// isSorted([]) === true
// isSorted([0, 3, 1, 2, 2, 2]) === false
// isSorted([1, 11, 2]) === false


////////////////


// Наш робот умеет преобразовывать команды движения в правильный сигнал и двигаться в соответствии с ним:

// 'forward' означает y + 1
// 'back' означает y - 1
// 'right' означает x + 1
// 'left' означает x - 1
// Было бы здорово, чтобы робот знал, где он сейчас находится даже без GPS.

// Напиши функцию getLocation, которая принимает массив начальных координат coordinates (в виде [x, y]) и массив истории команд commands.

// Функция должна возвращать массив конечных координат робота в том же формате ([x, y]) после движений согласно командам из commands.

// function getLocation(coordinates, commands) {
//     let arr = [...coordinates];

//     for (let i = 0; i < commands.length; i++) {
//       switch (commands[i]) {

//         case 'forward': 
//           arr[1]++;
//           break;

//         case 'back': 
//           arr[1]--;
//           break;

//         case 'right': 
//           arr[0]++;
//           break;

//         case 'left': 
//           arr[0]--;
//           break;
//       }
//     }
//     return arr;
//   }


/////////////////////


// Итак, когда все процессы настроены, нужно ставить перед собой правильные цели. Наши роботы лучшие на рынке, поэтому нужно наращивать обороты и увеличивать объемы производства.

// Напиши функцию getPlan, которая вернёт массив с целями на заданное количество месяцев numberOfMonths. Сейчас мы производим startProduction роботов в месяц и хотим, чтобы каждый месяц это число росло на заданный процент percent.

// Если число роботов окажется дробным, округли его вниз (Math.floor(value)). Цель на следующий месяц рассчитывай на основе предыдущего.

// function getPlan(startProduction, numberOfMonths, percent) {
//     // write code here
//     let goals = [];
//     let currentProduction = startProduction;

//     for (let i = 0; i < numberOfMonths; i++) { 
//       currentProduction = Math.floor(currentProduction + (currentProduction * percent / 100));    
//       goals.push(currentProduction);  
//     }
//     return goals;
//   }

// getPlan(200, 3, 50) === [300, 450, 675]
// getPlan(10, 4, 30) === [13, 16, 20, 26]
// getPlan(1000, 6, 20) === [1200, 1440, 1728, 2073, 2487, 2984]


//////////////////////////


// Первая партия роботов готова, теперь их надо проверить. Все роботы уникальны, поэтому скорость перемещения у каждого своя. Нужно определить минимальную, максимальную и среднюю скорость роботов.

// Наш сервер получает массив скоростей роботов testResults, пропускает его через функцию getSpeedStatistic и возвращает статистику в виде массива.

// Первый элемент результирующего массива — самая низкая скорость
// второй — самая высокая
// третий — среднее значение всех скоростей из testResults, округлённое вниз (используй Math.floor(result))

// function getSpeedStatistic(arr) {
//     if (!arr.length) arr = [0];
//     return [Math.min(...arr), Math.max(...arr), Math.floor(arr.reduce((a, b) => a + b) / arr.length)];
//   }

//   getSpeedStatistic([10, 10, 11, 9, 12, 8]) === [8, 12, 10]
// getSpeedStatistic([10]) === [10, 10, 10]
// getSpeedStatistic([]) === [0, 0, 0]
// getSpeedStatistic([8, 9, 3, 12]) === [3, 12, 8]
// getSpeedStatistic([5]) === [5, 5, 5]


////////////////////////

// Роботы протестированы. Медленные роботы отправлены на апгрейд. Mate Post хочет купить у нас десяток роботов для доставки грузов по городу. Для этого им нужны роботы, которые будут переносить за день больше всего груза.

// Давай напишем функцию compareRobots, которая получает два массива. Первый массив firstRobotResults - это веса грузов, перевезённых за день первым роботом, второй secondRobotResults - соответственно вторым.

// Проверь, кто из роботов перевёз больший вес, и верни строку с рекомендацией, кого из роботов стоит купить (см. примеры).

// function compareRobots(firstRobotResults, secondRobotResults) {
//     let sumFirstRobot = 0;
//     let sumSecondRobot = 0;

//     for (let i = 0; i < firstRobotResults.length; i++) {
//       sumFirstRobot += firstRobotResults[i];
//     }

//     for (let j = 0; j < secondRobotResults.length; j++) {
//       sumSecondRobot += secondRobotResults[j];
//     }

//     if (sumFirstRobot > sumSecondRobot) {
//       return `First robot for sale!`;
//     } else if (sumFirstRobot < sumSecondRobot) {
//       return `Second robot for sale!`;
//     } else {
//       return `Both robots for sale!`;
//     }   
//   }

//   compareRobots([12, 4, 13], [1, 1, 4, 5, 12]) === 'First robot for sale!' // 29 > 23
//   compareRobots([9, 7, 9], [1, 3, 4, 5, 12]) === 'Both robots for sale!' // 25 = 25
//   compareRobots([1, 3, 4], [1, 1, 4, 5]) === 'Second robot for sale!' // 8 < 11



//////////////


// Создай функцию checkNumber, которая принимает целое число number и проверяет его по трем различым свойствам:

// это число положительное?
// это число четное?
// это число кратно 10?
// Функция должна вернуть массив с результатами проверок в виде булевых значений.

// function checkNumber(number) {
//     let positiveNumber = true;
//     let doubleNumber = true;
//     let multipleNumber = true;

//     if (number > 0) {
//         positiveNumber = true;
//     } else {
//         positiveNumber = false;
//     }


//     if ((number % 2) === 0) {
//         doubleNumber = true;
//     } else {
//         doubleNumber = false;
//     }


//     if ((number % 10) === 0) {
//         multipleNumber = true;
//     } else {
//         multipleNumber = false;
//     }

//     return [positiveNumber, doubleNumber, multipleNumber];
// }

// checkNumber(3) === [true, false, false]
// checkNumber(10) === [true, true, true]
// checkNumber(0) === [false, true, true]
// checkNumber(-1) === [false, false, false]


///////////////////////


// Реализуй функцию getArraysSum, которая принимает два массива чисел одинаковой длины, и возвращает сумму всех элементов этих массивов.

// function getArraysSum(arr1, arr2) {
//     return arr1.concat(arr2).reduce((sum, a) => sum + a, 0);
// }

// getArraysSum([1, 2], [3, 4]) === 10  // 1 + 2 + 3 + 4 = 10
// getArraysSum([], []) === 0


///////////////////////////


// Реализуй функцию combineArrays, которая принимает 2 массива чисел (first и second) и возвращает массив чисел где N[i] это сумма чисел first[i] и second [i].

// Примечания:

// Входные массивы всегда одинакового размера.

// function combineArrays(first, second) {
//     for(let i = 0; i < first.length; i++){
//       first[i] = first[i] + second[i];
//     }
//     return first;
//   }

//   combineArrays([1, 2, 5], [3, 6, 1]) === [4, 8, 6]
// combineArrays([1], [6]) === [7]
// combineArrays([], []) === []


////////////////////////////


// Напиши функцию splitString, которая принимает строку str и возвращает массив строк из двух символов.

// Если строка содержит нечетное количество символов, тогда второй символ последней строки нужно заменить на подчеркивание (_).

// function splitString(str) {
//     const symb = [];

//     if (str.length % 2 !== 0) {
//       str += '_';
//     }

//     const n = str.split('');

//     for (let i = 0; i < n.length; i = i + 2) {
//       symb.push(n[i] + n[i + 1]);
//     }

//     return symb;
//   }

// splitString('abc') === ['ab', 'c_']
// splitString('abcdef') === ['ab', 'cd', 'ef']


//////////////////////


// Создай функцию scrollingText, которая

// принимает строку word;
// последовательно переставляет все символы в строке с нулевого индекса на последний;
// возвращает массив с полученными комбинациями этой строки в верхнем регистре.

// function scrollingText(word) {
//     let arr = [];
//     let upWord = word.toUpperCase();

//     for (let i = 0; i < upWord.length; i++) {
//         arr.push(upWord.slice(i) + upWord.slice(0, i));
//     }

//     return arr;
// }

// scrollingText('robot')

// Возвращает:
// [ 'ROBOT',
//   'OBOTR',
//   'BOTRO',
//   'OTROB',
//   'TROBO' ]


//////////////////////


// Создай функцию isSpecialNumber, которая принимает положительное число n и определяет, является ли оно особенным.

// Число называется особенным, если оно включает в себя только цифры 0, 1, 2, 3, 4 или 5.

// Функция должна возвращать строку 'Special!!', если число особенное, и 'NOT!!', если оно таковым не является.

// Примечание: однозначные числа в интервале [0:5] считаются особенными числами.

// function isSpecialNumber(n) {
//     // write code here
//     let str = n.toString().split("");
//     let swc = 0;

//     for (let i = 0; i < str.length; i++) {
//         if (str[i] > 5) {
//             swc++;
//             break;
//         }
//     }
//     if (swc > 0) {
//         return "NOT!!";
//     }
//     return "Special!!";
// }

// isSpecialNumber(2) === 'Special!!'
// 2 - это однозначное число в интервале [0:5].

// isSpecialNumber(9) === 'NOT!!'
// 9 - это однозначное число, но оно не находится в интервале [0:5].

// isSpecialNumber(23) === 'Special!!'
// Все цифры числа 23 находятся в интервале [0:5].

// isSpecialNumber(39) === 'NOT!!'
// Вторая цифра (9) не находится интервале [0:5].


/////////

// Давай проверим, все ли наши числа 'опрятные' и все цифры числа стоят в правильном порядке - в неубывающей последовательности.

// Создай функцию isTidy, которая принимает положительное число number и возвращает true, если его цифры в неубывающей последовательности, или false, если это не так.

// function isTidy(number) {
//     let str = number.toString();
//     for (let i = 1; i < str.length; i++) {
//         if (str[i - 1] > str[i]) {
//             return false;
//         }
//     }
//     return true;
// }

// isTidy (12) ==> true
// Цифры { 1, 2 } расположены в неубывающей последовательности, то есть 1 <= 2.

// isTidy (32) ==> false
// Цифры { 3, 2 } расположены в порядке убывания, то есть 3 > 2.

// isTidy (1024) ==> false
// Цифры { 1, 0, 2, 4 } расположены в порядке убывания, поскольку 0 < 1.

// isTidy(3445) ==> true
// Цифры { 3, 4, 4, 5 } расположены в неубывающей последовательности, т.к. 4 <= 4.

// isTidy (13579) ==> true
// Цифры { 1, 3, 5, 7, 9}  расположены в возрастающей последовательности.



//////////////////////////////////


// Реализуй функцию isJumping, которая принимает число number и возвращает строку JUMPING, если каждая цифра в числе отличается от соседней на 1. Если условие не выполняется - строку NOT JUMPING.

// Примечания:

// Входное число всегда положительное
// Разница между 9 и 0 не является 1
// Все числа, которые состоят из одной цифры - JUMPING

// function isJumping(number) {
//     // write code here
//     let jump = "JUMPING",
//         notJump = "NOT JUMPING",
//         bool= false,
//         str = number + "";
//         let arr =str.split("");
//         arr = arr.map( s => + s );

//     if(number >= 0 && number < 10){
//       return jump;
//     }else {
//         for(let i = 1;i<str.length;i++){
//         if(arr[i-1] - arr[i] == 1 || arr[i-1] - arr[i] == -1){
//             bool = true;
//         }else return notJump;
//         }
//     }
//     if(bool){
//         return jump;
//     }else return notJump;
//   }

// isJumping(9) === 'JUMPING'
// Это число из одной цифры

// isJumping(79) === 'NOT JUMPING'
// Соседние цифры не отличаются на 1

// isJumping(23454) === 'JUMPING'
// Соседние цифры отличаются на 1


////////////////////////



