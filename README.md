# Week12

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
