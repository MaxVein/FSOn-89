//* Example 1 - Математичні оператори
// const apples = 47;
// const grapes = 135;
// const total = apples + grapes;
// console.log(total)
// const diff =grapes - apples ;
// console.log(diff)

//* Example 2 - Комбіновані оператори
// let students = 100;
// students = students + 50;
// console.log(students);

//* Example 3 - Пріоритет операторів
// const result = 108 + 223 - 2 * 5;
// console.log(result);

//* Example 4 - Клас Math
// console.log(Math.floor(2.8));
// console.log(Math.ceil(2.4));
// console.log(Math.round(2.5));

//* Рядки
const concat = "I love" + "JS" + "so much"; // конкатенація
// console.log(concat);
const language = "JS";
const templateLiteral = `I love ${language} so much`; //template literal
// console.log(templateLiteral);

//* Example 6 - Методи рядків та чейнінг
// let weight = "88,3";
// let height = "1.75";

// const bmi = (
//   Number.parseFloat(weight.replace(",", ".")) /
//   Number.parseFloat(height) ** 2
// ).toFixed(2);
// console.log(bmi); //індекс маси тіла

//* Example 7 - Оператори порівняння та приведення типів
// console.log(5 > 4); // <, >=, <=, +, -, *, / etc.
// console.log(2 > "2");
// console.log(2 == "2"); // нестроге
// console.log(2 === "2"); // строге
// console.log(1 == true);
// console.log(1 === true)
// console.log(0 == false);
// console.log(0 === false)
// console.log(undefined == null);
// console.log(undefined === null);

//* Example 8 - Логічні оператори: &&, ||, ??, !
// console.log(true && 3);
// console.log(true && 3 && 'x');
// console.log(false && 3);

// console.log(false || 3 || true);
// console.log(null || undefined || 3);

// console.log(null || undefined || (2 && 3) || 4);
// console.log(null || undefined || (false && 3) || 4);

// const productNumber = null;
// console.log(productNumber ?? null ?? 125);
// const statusOnline = false;
// console.log(statusOnline ?? 'no status');

// console.log(!true);
// console.log(!"A");
// console.log(!"a" || !"d" || "a");

//* Example 9 - Оператор %
// HH:MM
// const totalMinutes = 70.8;

// const hours = Math.floor(totalMinutes / 60);
// const minutes = Math.floor(totalMinutes % 60);
// const seconds = Math.ceil((minutes % 1) * 60);

// console.log(hours);
// console.log(minutes);
// console.log(seconds);

// const doubleDigitHours = String(hours).padStart(2, 0);
// const doubleDigitMinutes = String(minutes).padStart(2, 0);
// const doubleDigitSeconds = String(seconds).replace("0.", "");
// console.log(`${doubleDigitHours}:${doubleDigitMinutes}:${doubleDigitSeconds}`);
