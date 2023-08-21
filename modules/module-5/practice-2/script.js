"use strict";

// ***************Прототипне наслідування та метод Object.create***************\\
// const user = {
//     name: 'Alice',
//     age: 23,
//     sayHello() {
//         console.log(`Hello my name is ${this.name}`);
//     },
//     getAge() {
//         console.log(`my age ${this.age}`);
//     }
// }

// const student = Object.create(user);

// console.log(student);
// student.sayHello()

// student.name = 'Kate';
// student.sayHello()

// student.getAge();

// student.age = 30;
// student.getAge();
// console.log(student)

// *********************************ES6 Class*********************************\\

// *****Публічні властивості та методи***** \\
// class User {
//     constructor(name) {
//         this.name = name;
//     }

//     showName() {
//         console.log(`Hello my name is ${this.name}`);
//     }
// }

// const student = new User('Alice');
// student.showName()

// *****Приватні властивості та методи***** \\
// class User {
//   #password;
//   constructor(name, password) {
//     this.name = name;
//     this.#password = password;
//   }

//   showName() {
//     if (this.#checkPassword()) {
//       console.log(`Hello my name is ${this.name}`);
//     } else {
//       console.log("Who are you ?🧐");
//     }
//   }

//   #checkPassword() {
//     const password = prompt();
//     return password === this.#password;
//   }
// }

// const student = new User('Alice', 'qwerty111');
// student.showName()

// ******Геттери і сеттери****** \\

// class User {
//   #password;
//   #email;
//   constructor(name, surname, password, email) {
//     this.name = name;
//     this.surname = surname;
//     this.#password = password;
//     this.#email = email;
//   }

//   showName() {
//     if (this.#checkPassword()) {
//       console.log(`Hello my name is ${this.name}`);
//     } else {
//       console.log("Who are you ?🧐");
//     }
//   }

//   #checkPassword() {
//     const password = prompt();
//     return password === this.#password;
//   }

//   get fullName() {
//     return this.name + " " + this.surname;
//   }

//   get email() {
//     if (this.#checkPassword()) {
//       return this.#email;
//     }
//   }

//   set email(newEmail) {
//     if (this.#checkPassword()) {
//       this.#email = newEmail;
//     }
//   }
// }

// const student = new User("Alice", "Doe", "qwerty111", "test@gmail.com");

// console.log(student.fullName);
// console.log(student.email);

// student.email = 'new@gmail.com';

// console.log(student.email);

// *****Статичні властивості та методи***** \\
// Розглянемо на практичному завдані (Task-3)

// **********Наслідування класів********* \\

// class User {
//     #password;
//     #email;
//     constructor(name, password, email) {
//         this.name = name;
//         this.#password = password;
//         this.#email = email;
//     }

//     showName() {
//         if (this.#checkPassword()) {
//             console.log(`Hello my name is ${this.name}`);
//         } else {
//             console.log("Who are you ?🧐");
//         }
//     }

//     #checkPassword() {
//         const password = prompt();
//         return password === this.#password;
//     }

//     get email() {
//         if (this.#checkPassword()) {
//             return this.#email
//         }
//     }

//     set email(newEmail) {
//         if (this.#checkPassword()) {
//             this.#email = newEmail;
//         }
//     }
// }

// class Student extends User {
//     constructor(name, password, email, points) {
//         super(name, password, email);
//         this.points = points;
//     }
//     getPoints() {
//         console.log(`${this.name} has ${this.points} points`);
//     }
// }

// const student = new Student('Alice', 'qwerty111', 'test@gmail.com', 38);
// student.showName()
// student.getPoints()

// ***********************Практика*********************** \\

// *******Task-1****** \\
// Необхідно створити клас Rectangle, який представляє прямокутник. Клас повинен мати приватні властивості width та height, а також гетери та сетери для цих властивостей. Гетери повинні повертати значення властивостей, а сетери повинні дозволяти змінювати значення властивостей з валідацією.

// class Rectangle {
//   #width;
//   #height;

//   constructor({ width, height }) {
//     this.#width = width;
//     this.#height = height;
//   }

//   get width() {
//     return this.#width;
//   }

//   set width(value) {
//     if (typeof value === "number" && value > 0) {
//       this.#width = value;
//     } else {
//         console.log(`Формат ${typeof value} не приймається! Передайте число.`)
//     }
//   }

//   get height() {
//     return this.#height;
//   }

//   set height(value) {
//     this.#height = value;
//   }
// }
// const item = new Rectangle({ width: 10, height: 5 });

// console.log(item.width); // get
// item.width = 12; // set success
// item.width = "12"; // set fail
// console.log(item.width); //get

// *******Task-2******* \\
// Реалізуйте клас Student, який успадковуватиметься від класу User. Цей клас повинен мати такі властивості:
// name приватна властивість (ім'я, успадковується від User),
// surname приватна властивість (прізвище, успадковується від User),
// year (рік вступу до вузу).

// Клас повинен мати метод getFullName() (успадковується від User), за допомогою якого можна вивести одночасно ім'я та прізвище студента.
// Також клас повинен мати метод getCourse(), який виводитиме поточний курс студента (від 1 до 5, якщо значення перевищує 5  виводити що студент є випускником).
// Курс обчислюється так: потрібно від поточного року відняти рік вступу до внз. Поточний рік отримаєте самостійно (читати документацію!!!).
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear
// Приклад ініціалізації екземпляру класу:

// const student = new Student("John", "Doe", 2019);

// class User {
//   #name;
//   #surname;

//   constructor(name, surname) {
//     this.#name = name;
//     this.#surname = surname;
//   }

//   getFullName() {
//     return this.#name + " " + this.#surname;
//   }
// }

// class Student extends User {
//   constructor(name, surname, year) {
//     super(name, surname);
//     this.year = year;
//   }

//   getCourse() {
//     const currentYear = new Date().getFullYear();
//     const result = currentYear - this.year;
//     return result > 5 ? "Студент є випускником!" : `Студент навчається на ${result} курсі`;
//   }
// }

// const student = new Student("John", "Doe", 2019);
// const student = new Student("John", "Doe", 2017);
// console.log(student);
// console.log(student.getFullName()); //поверне 'John Doe'
// console.log(student.getCourse()); //поверне 4

// *******Task-3******* \\
// Необхідно створити клас Hero, який представляє героя з гри. Клас повинен мати публічні властивості name, level та health, а також методи attack та heal, що дозволяють герою атакувати та відновлювати здоров'я відповідно.
// Також створи функціонал для підрахунку створених героїв

// Властивість name має зберігати ім'я героя.
// Властивість level має зберігати рівень героя.
// Властивість health має зберігати поточний рівень здоров'я героя.
// Метод attack наносить пошкодження в розмір 10 одиниць. Метод heal додає до здоров'я героя 10 одиниць.

// class Hero {
//   #initialHealth;

//   static maxHealth = 100;
//   static heroCounter = 0;
//   static heroArray = [];

//   constructor(name, level) {
//     this.name = name;
//     this.level = level;
//     this.health = Hero.maxHealth + this.level / 2;
//     this.#initialHealth = this.health;
//     Hero.heroCounter++;
//     Hero.heroArray.push(this);
//   }

//   attack(opponent) {
//     if (opponent) {
//       opponent.health -= 10;
//     } else {
//       console.log("В порожнечу не атакуємо!");
//     }
//   }

//   heal() {
//     if (this.health <= 0) {
//         console.log("He is dead. Goodbye.");
//         return;
//     }

//     const result = this.health + 10;
//     if (result > this.#initialHealth) {
//       this.health = this.#initialHealth;
//     } else {
//       this.health += 10;
//     }
//   }
// }

// const bloodseeker = new Hero("Bloodseeker", 5);
// const bloodseeker2 = new Hero("Bloodseeker2", 2);

// console.log(bloodseeker);
// console.log(bloodseeker2);
// bloodseeker.attack(bloodseeker2);
// bloodseeker.attack(bloodseeker2);
// console.log(bloodseeker2);
// bloodseeker2.heal();
// console.log(bloodseeker2);
// console.log(bloodseeker.heal());
// console.log(bloodseeker);
// console.log(Hero.heroCounter);
// console.log(Hero.heroArray);

// *******Task-4******* \\
// Необхідно створити клас BankAccount, який представляє банківський рахунок. Клас повинен мати приватну властивість balance, яка представляє баланс рахунку. Клас повинен також мати публічні методи deposit та withdraw, які дозволяють здійснювати операції з депозитом та зняттям коштів з рахунку. При цьому balance повинна бути доступна лише в межах класу BankAccount та його приватних методів.

// class BankAccount {
//     #balance = 0;

//   get balance() {
//     return `Ваш баланс ${this.#balance} грн.`;
//     }

//     get staticEqual() {
//         return BankAccount.x === BankAccount.y;
//     }

//   deposit(value) {
//     if (typeof value === "number") {
//       this.#balance += value;
//     } else {
//       console.log("ПОМИЛКА. Шахрай");
//     }
//   }
//   withdraw(value) {
//     if (typeof value === "number") {
//       this.#balance -= value;
//     } else {
//       console.log("ПОМИЛКА. Шахрай");
//     }
//   }
// }

// const instance = new BankAccount();
// instance.deposit(100);
// instance.deposit(1200);
// instance.withdraw(1000);
// console.log(instance.balance);