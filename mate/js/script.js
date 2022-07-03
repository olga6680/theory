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


