// // console.log(document.body);
// console.log(document.documentElement); // получим в консоль весь html 

// console.log(document.body.childNodes); // получим все элементы

// console.log(document.body.firstChild); 
// console.log(document.body.firstElementChild); 

// console.log(document.body.lastChild); 


// console.log(document.querySelector('#current').parentNode.parentNode); 
// console.log(document.querySelector('#current').parentNode.parentElement); 

// console.log(document.querySelector('[data-current="3"]').nextSibling);
// console.log(document.querySelector('[data-current="3"]').previSibling);
// //так мы получаем следующую или предыдущую текстовую ноду.
// // Например, перенос строки, если он есть

// console.log(document.querySelector('[data-current="3"]').nextElementSibling);
// console.log(document.querySelector('[data-current="3"]').previElementSibling);
// // так мы получим элементы

//////
// console.log(document.body.childNodes); // нет аналогов для элементов
// поэтому создают вручную

for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') { // если попадется текстовая нода, 
        //    ничего с ней не делать
        continue; //    так останутся одни элементы
    }

    console.log(node);
}