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