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