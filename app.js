//1)
// let name = 'Я JavaScript!'
// alert(name)

//2)
// let name, admin
// name = 'Djon'
// admin = name
// alert(name)

//3)
// let planet
// planet = 'земля'
// alert(planet)

// let username
// name = 'Ваше имя'
// prompt(name)

//4)
// let name = "Slava"
// alert(`Хай, ${name}`)

// let name = "Slava"
// alert(`Хай, ${1 + 4}`)

//5)
// let age = prompt('Сколько тебе лет?', 100);
//
// alert(`Тебе ${age} лет!`); // Тебе 100 лет!

//6)
// let username = prompt('Как тебя зовут', '')
// alert(`Твое имя ${username}`)

//7)
// let a = 1
// let b = 2
//
// alert(a + b); // 12

//8)
// let year = prompt('В каком году была опубликована спецификация ECMAScript-2015?', '');
//
// if (year == 2015) {
//     alert( 'Да вы знаток!' );
// } else {
//     alert( 'А вот и неправильно!' ); // любое значение, кроме 2015

//9)
// let year = prompt('В каком году была опубликована спецификация ECMAScript-2015?', '');
//
// if (year < 2015) {
//     alert( 'Это слишком рано...' );
// } else if (year > 2015) {
//     alert( 'Это поздновато' );
// } else {
//     alert( 'Верно!' );
// }

// let name = prompt('Какое «официальное» название JavaScript?', '')
// if (name == 'ECMAScript'){
//     alert('Верно')
// } else {
//     alert('Не знаете? “ECMAScript”!')
// }

//10)
// let result;
//
// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Много';
// }

//11)
// let userName = prompt("Кто там?", '');
//
// if (userName == 'Админ') {
//
//     let pass = prompt('Пароль?', '');
//
//     if (pass == 'Я главный') {
//         alert( 'Здравствуйте!' );
//     } else if (pass == '' || pass == null) {
//         alert( 'Отменено' );
//     } else {
//         alert( 'Неверный пароль' );
//     }
//
// } else if (userName == '' || userName == null) {
//     alert( 'Отменено' );
// } else {
//     alert( "Я вас не знаю" );
// }

// let questionCar = prompt('Введите марку авто');
// let speed = +prompt('Введите скорость');
// let Answer1 = (`${questionCar} движется со скоростью ${speed} км/ч`);
// alert(Answer1);
//
// let questionCar2 = prompt('Введите марку авто своего друга');
// let speed2 = +prompt('Введите скорость своего друга');
// let Answer2 = (`${questionCar2} движется со скоростью ${speed2} км/ч`);
// alert(Answer2);
//
// let sum = Math.abs(speed - speed2);
// let decision = (`Значит разница в скорости у ${questionCar} и ${questionCar2} будет ${sum} км/ч `)
// alert(decision);

//12)
// for (let i = 2; i < 10; i++) {
//     if (i % 2 == 0) continue
//     alert(i)
// }

//13)
// let i = 0
// while (i < 3) {
//     alert(`number ${i}!`)
//     i++
// }

//14)
// let num;
//
// do {
//     num = prompt("Введите число больше 100?", 0);
// } while (num <= 100 && num);

//15)
// if(browser == 'Edge') {
//     alert("You've got the Edge!");
// } else if (browser == 'Chrome'
//     || browser == 'Firefox'
//     || browser == 'Safari'
//     || browser == 'Opera') {
//     alert( 'Okay we support these browsers too' );
// } else {
//     alert( 'We hope that this page looks ok!' );
// }

//16)
// let userName = 'Вася';
//
// function showMessage() {
//     userName = "Петя";
//
//     let message = 'Привет, ' + userName;
//     alert(message);
// }
//showMessage();

//17)
// function showMessage(from, text) { // аргументы: from, text
//     alert(from + ': ' + text);
// }
//
// showMessage('Аня', 'Привет!'); // Аня: Привет! (*)
// showMessage('Аня', "Как дела?"); // Аня: Как дела? (**)

//18)
// function checkAge(age) {
//     return (age > 18) ? true : confirm('Родители разрешили?');
// }

//19)
// let double = n => n * 2;
//
// alert( double(6) ); // 6

//20)
// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no()
// }
//
// ask(
//     'Вы согласны?',
//     () => alert("Вы согласились.") ,
//     () => alert("Вы отменили выполнение.")
// )

//21)
// let userName = prompt("Введите имя", "Алиса");
// let isTeaWanted = confirm("Вы хотите чаю?" );
//
// alert( "Посетитель: " + userName ); // Алиса
// alert( "Чай: " + isTeaWanted ); // true

//22)
// let user = {
//     name: "John",
//     age: 30
// };
//
// let key = prompt("Что вы хотите узнать о пользователе?", "name");
//
// // доступ к свойству через переменную
// alert( user[key] ); // John (если ввели "name")

//23)
// let user = {}
// user.name = 'John'
// user.surname = 'Smith'
// user.name = 'Pete'
// delete user.name

//24)
// let salaries = {
// //     John: 100,
// //     Ann: 160,
// //     Pete: 130
// // }
// // let sum = 0
// // for (let key in salaries) {
// //     sum += salaries[key]
// // }
// // alert(sum)

//25)
// let calculator = {
//
//     sum() {
//         return this.a + this.b
//     },
//     mul() {
//         return this.a * this.b
//     },
//     read (){
//         this.a = +prompt('a?', 0)
//         this.b = +prompt('b?', 0)
//     }
// };

//26)
// function Calculator(){
//     this.read = function (){
//         this.a = +prompt('a?', 0)
//         this.b = +prompt('b?', 0)
//     }
//     this.sum = function (){
//         return this.a + this.b
//     }
//     this.mul = function (){
//        return this.a * this.b
//     }
// }
// let calculator = new Calculator();
// calculator.read();
//
// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );


// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

//27)

// function Accumulator(startingValue){
//     this.value = startingValue
//
//     this.read = function (){
//        this.value += +prompt('число', 0)
//     }
// }
// let accumulator = new Accumulator(1); // начальное значение 1
//
// accumulator.read(); // прибавит ввод prompt к текущему значению
// accumulator.read(); // прибавит ввод prompt к текущему значению
//
// alert(accumulator.value); // выведет сумму этих значений

//28)
// let a = +prompt('Введите число', '')
// let b = +prompt('Введите число', '')
// alert(a + b)

//29)
// function  random( min, max){
//     return min + Math.random() * (max - min)
// }
// alert( random(1, 5) ); // 1.2345623452
// alert( random(1, 5) ); // 3.7894332423
// alert( random(1, 5) ); // 4.3435234525

// function randomInteger(min, max) {
//     // случайное число от min до (max+1)
//     let rand = min + Math.random() * (max + 1 - min);
//     return Math.floor(rand);
// }
//
// alert( randomInteger(1, 3) );


//30)
// function ucFirst(str) {
//     if (!str) return str;
//
//     return str[0].toUpperCase() + str.slice(1);
// }
//
// alert( ucFirst("slava") ); // Slava

// let fruits = ["Яблоко", "Апельсин", "Груша"];
//
//  fruits.pop() // удаляем "Груша" и выводим его
//
// alert( fruits ); // Яблоко, Апельсин

// let army = {
//  minAge: 18,
//  maxAge: 27,
//  canJoin(user) {
//   return user.age >= this.minAge && user.age < this.maxAge;
//  }
// };
//
// let users = [
//  {age: 16},
//  {age: 20},
//  {age: 30},
//  {age: 23}
// ];
//
// // найти пользователей, для которых army.canJoin возвращает true
// let soldiers = users.filter(army.canJoin, army);
//
// alert(soldiers.length); // 2
// alert(soldiers[0].age); // 20
// alert(soldiers[1].age); // 23


//31)
// function filterRange(arr, a, b) {
//  // добавлены скобки вокруг выражения для улучшения читабельности
//  return arr.filter(item => (a <= item && item <= b));
// }
//
// let arr = [5, 3, 8, 1];
//
// let filtered = filterRange(arr, 1, 4);
//
// alert( filtered ); // 3,1 (совпадающие значения)
//
// alert( arr ); // 5,3,8,1 (без изменений)

//32)
// let arr = [5, 2, 1, -10, 8];
// arr.sort()
// alert( arr ); // 8, 5, 2, 1, -10

//33)
// function copySorted(arr) {
//  return arr.slice().sort();
// }
//
// let arr = ["HTML", "JavaScript", "CSS"];
//
// let sorted = copySorted(arr);
//
// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (без изменений)

//34
// let vasya = {name: "Вася", age: 25};
// let petya = {name: "Петя", age: 30};
// let masha = {name: "Маша", age: 28};
//
// let users = [vasya, petya, masha];
// let age = [30, 25,  28]
//
// let names = users.map(item => item.name)
// let ages = age.map(item => item.age)
//
// alert(names); // Вася, Петя, Маша
// alert(age)

//35)
// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };
//
// let users = [ vasya, petya, masha ];
//
// let usersMapped = users.map(user => ({
//     fullName: `${user.name} ${user.surname}`,
//     id: user.id
// }));
//
// /*
// usersMapped = [
//   { fullName: "Вася Пупкин", id: 1 },
//   { fullName: "Петя Иванов", id: 2 },
//   { fullName: "Маша Петрова", id: 3 }
// ]
// */
//
// alert( usersMapped[0].id ); // 1
// alert( usersMapped[0].fullName ); // Вася Пупкин

//35)
// function sortByAge(users)
//
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };
//
// let arr = [ vasya, petya, masha ];
//
// sortByAge(arr);
//
// // теперь: [vasya, masha, petya]
// alert(arr[0].name); // Вася
// alert(arr[1].name); // Маша
// alert(arr[2].name); // Петя


//36)
// function unique(arr) {
//     return Array.from(new Set(arr))
// }
//
// let values = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];
//
// alert( unique(values) ); // Hare,Krishna,:-O

//37)
// let name = 'Slava'
// let age = 21
//
// const lastName = prompt('Введите фамилию')
// alert(name + ' ' + lastName + ', Возраст ' + age)


//ЛАЙК _________________
// let likebtn = document.querySelector('#likebtn')
// let dislikebtn = document.querySelector('#dislikebtn')
//
// let input1 = document.querySelector('#input1')
// let input2 = document.querySelector('#input2')
//
// likebtn.addEventListener('click', () => {
//     input1.value = parseInt(input1.value) + 1
// })
//
// dislikebtn.addEventListener('click', () => {
//     input2.value = parseInt(input2.value) + 1
// })
// console.log()
//________________________

//ПОЧТА____________
const email = document.querySelector('#email')
const icon1 = document.querySelector('.icon1')
const icon2 = document.querySelector('.icon2')
const valid = document.querySelector('.valid')
const btn = document.querySelector('#btn')

let regExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/

function check() {
    if (email.value.match(regExp)) {
        email.style.borderColor = '#03ff38'
        email.style.background = '#dcffdf'
        icon1.style.display = 'none'
        icon2.style.display = 'block'
        valid.style.display = 'none'
        btn.style.display = 'block'
    } else {
        email.style.borderColor = '#fd0202'
        email.style.background = '#fde1e1'
        icon1.style.display = 'block'
        icon2.style.display = 'none'
        valid.style.display = 'block'
        btn.style.display = 'none'

    }
}
function submit(){
    alert('Успешно')
}