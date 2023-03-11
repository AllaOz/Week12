
Week13

1.	let date = new Date(2021, 0, 25, 22, 51); // Mon Jan 25 2021 22:51:00 GMT+0300 (GMT+03:00)
2.	getDay () вернёт день недели от 0 (воскресенье) до 6 (суббота).
3.	let start = new Date(); 
let end = new Date(2023, 2, 12, 0, 0, 0, 0); 
let countSec = (end - start) / 1000;
console.log(countSec);
4.	getDate() -  получение информации из date, получить день месяца, от 1 до 31
5.	VM44:2 Wed Mar 09 2016 00:00:00 GMT+0200 (GMT+03:00)
6.	getTimezoneOffset() — возвращает разницу в минутах между местным часовым поясом и UTC:
7.	покажет час в часовом поясе UTC+0 
8.	получение часов из объекта
9.	2023 – получит выведение года в формате 4-х знаков
10.	let y = new Date(); 
let d = y.getDate();
console.log(d); Я не нашла ошибку, код выводит текущий день месяца


Week12

1. Строку можно создать с помощью одинарных ‘ ‘, двойных “ “ либо обратных ` ` кавычек. Одинарные и двойные кавычки работают, по сути, одинаково, а обратные кавычки, то в такую строку мы сможем вставлять произвольные выражения, обернув их в ${…} и обратные кавычки могут занимать больше чем 1 строку.
2. Методом indexOf ex.
   let str = 'Я хочу на Мальдивы';
   console.log(str.indexOf('хочу'); // 2
   Методом lastIndexOf - поиск с конца строки
   let str = 'Я хочу опять на Мальдивы';
   console.log(str.lastIndexOf('опять')); // 7

3. \n – символ переноса строки ex
   let guestList = "Guests:\n _ John\n _ Pete\n \* Mary";
   console.log (guestList); // все гости с новой строки

4. const name = "настя"
   const result = name.charAt(0).toUpperCase() + name.slice(1)
   console.log(result) // Настя

5. console.log(Math.round(12.35)); // 12
6. console.log(Math.round(Math.random() \* 100));
7. "The string length is 6"
8. ВЕЛОСИПЕД
9. В приведенном фрагменте результата не будет, для изменения роз на красивые нужно const str = "розы такие розы";
   const n = str.replace( /розы/g,"красивые");
   console.log(n) // красивые такие красивые
10. "(2,3): cde"
