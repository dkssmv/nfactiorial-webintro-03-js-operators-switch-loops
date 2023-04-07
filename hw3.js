// 1.Создайте объект user. Узнайте у user-a его имя, возраст, 
// является ли он мужчиной или женщиной. Запишите все в объект. 
// И выведите в консоли. 

// const userName = prompt('Your name: ', '');
// const userAge = prompt('Your age: ', '18');
// const userGender = prompt('Your gender: ', 'women');

// user = {
//     name: userName,
//     age: userAge,
//     gender: userGender,
// }

//console.log(user);

// 2.Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert.

// let user1Age = prompt('Age: ', ' ');
// if (user1Age < 18) {
//     alert('access denied, your age is: ' + user1Age)
// } else {
//     alert('you can access, you are: ' + user1Age)
// } 


//3.Перепишите этот блок кода с использованием оператора switch.

// let a = +prompt('a?', '');

// console.log(a) // string
// a = +a
// console.log(a) // number

// switch(a) {
//     case 0:
//     alert( 0 );
//     break;

//     case 1:
//     alert( 1 );
//     break;

//     case 2 || 3:
//     alert( '2,3' );
//     break;
// }

//4. Посчитайте сумму всех четных чисел в промежутке 1-100. Выведите в консоль.

// let sum = 0;
// for (let i = 1; i<=100; i++){
//     if (i % 2 == 0) {
//         sum += i;
//     }
// }
// console.log(sum);

//5. Перепишите цикл for на while.

// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
//   }

let i = 0;
while (i < 3){
    alert(`number ${i}!`);
    i++;
}