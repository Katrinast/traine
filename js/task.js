// Напиши функцію, яка перебирає масив логінів і перевіряє
// чи є ім'я введене в інпут у цьому масиві і у разі, якщо є - виводить повідомлення "Доступ дозволено"
// const logins = ["Mango", "Polly"];
// const str = prompt(enter your login);

// function checkLogin(logins, str) {
//   return logins.includes(str) ? "Доступ дозволено" : "Доступ ne дозволено";
  
// }

// console.log(checkLogin(logins, str));

// Напишіть функцію min(a,b), яка повертає менше чисел a і b.

//Напиши функцію конструктор User для створення користувача з такими властивостями
//a. userName - ім'я, рядок
//b. age - вік, число
//c. numbersOfPost - кількість постів, число
//d. клас очікує 1 параметр - об'єкт налаштувань з однойменними властивостями

//Додай метод getInfo(), який повертає рядок:
//`Користувачеві ${} ${} років і в нього ${} публікацій.`

// function User(userOption) {
//   this.userName = userOption.userName;
//   this.age = userOption.age;
//   this.numbersOfPost = userOption.numbersOfPost;

//   this.getInfo = function () {
// return `Користувачеві ${this.userName} ${this.age} років і в нього ${this.numbersOfPost} публікацій.`
//   }

// }

// const polly = new User({ userName: "Polly", age: 30, numbersOfPost: 15, })
// console.log(polly);
// console.log(polly.getInfo());

//Напиши клас Client який створює об'єкт
//з ​​властивостями login email
//Оголоси приватні властивості #login #email,
//доступ до яких зроби через геттер та сеттер login email

// class Client {
//   #login;
//   #email;
//   constructor(login, email) {
//     this.#login = login;
//     this.#email = email;
//   }
//   get login() {
//     return this.#login;
//   }
//   set login(newLogin) {
//     this.#login = newLogin;
//   }
//   get email() {
//     return this.#email;
//   }
//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new Client("Mango", "mango@gmail.com");
// mango.login = "Polly";
// console.log(mango.login);

//Напиши клас Notes який управляє колекцією нотаток у
//властивості items.
//Нотатка - це об'єкт із властивостями text і priority.
//Додай класу статичний метод Priopity,
//який буде повертати об'єкт із пріоритетами.
//Додай методи addNote(note), removeNote(text)
//updatePriority(text, newPriority)

// class Notes {
//   static Priopity() {
//     return {
//       LOW: "Low",
//       HIGHT: "hight",
//     }
//   }
//   constructor() {
//     this.items = [];
//   }
//   addNote(note) {
//     this.items.push(note);
//   }
//   removeNote(text) {
//     this.items = this.items.filter(item => item.text !== text);
//   }
//   updatePriority(text, newPriority) {
//    const note = this.items.find(item => item.text === text);
//   }
// }
// const noteFirst = new Notes();
// noteFirst.addNote()

// class Library {
//   constructor() {
//     this.books = [];
//   }
//   getBooks() {
//     return this.books;
//   }
//   addBooks(book) {
//     this.books.push(book);
//   }
//   searchBookByTitle(title) {
//   return this.books.find(book => book.title === title) || `Book ${title} is not found`;
//   }
//   searchBookByAuthor(author) {
//     return this.books.find(book => book.author === author) || `Book ${author} is not found`;
//   }
//   searchBookByGenre(genre) {
//     return this.books.filter(book => book.genre === genre);
//   }
//   removeBook(title) {
//     this.books = this.books.filter(book => book.title !== title)
//   }
// }

// const libraryIt = new Library();
// libraryIt.addBooks({ title: "Java Script", author: "Mango", genre: "since",})
// console.log(libraryIt.getBooks());
// console.log(libraryIt.searchBookByTitle("Java"));
// console.log(libraryIt.searchBookByAuthor("Mango"));
// console.log(libraryIt.searchBookByGenre("since"));


//  Написати клас, який буде представляти зоопарк тварин.
//  Створити загальний клас Animal для тварин.
// У зоопарку повинні бути різні типи тварин, такі як ссавці, птахи, рептилії тощо.
// Кожен тип тварин повинен мати свої властивості та методи, наприклад,
//  методи для отримання інформації про тварину та для годівлі тварин.
//  Крім того, зоопарк повинен мати метод для додавання тварин до списку та
// метод для виведення списку всіх тварин у зоопарку.

// class Animals {
//   constructor(animal, species) {
//     this.name = name;
//     this.species = species;
//   }
//   getInfo() {
//     retun`Name: ${this.name}, Species: ${species}`;
//   }

//   feed() {
//     return `Feeding ${this.name}`;
//   }
// }

// class Mammal extends Animals {
//   constructor(name, species, sound) {
//     super(name, species);
//     this.sound = sound;

//   }
//   makeSound() {
//     `This ${this.name} ${this.species} make ${this.sound}`;
//   }
// }

// class Birds extends Animals {
//   constructor(name, species, wingspan) {
//     super(name, species);
//     this.wingspan = wingspan;

//   }
//   fly() {
//     return `This ${this.name} the ${this.species} with ${this.wingspan}`;
//   }
// }

// class Zoo {
//   constructor() {
//     this.animals = [];
//   }
//   addAnimal(animal) {
//     this.animals.push(animal);
//   }
// }

// const zoo = new Zoo();
// const lion = new Mammal("simba", "lion" "ARRRR");
