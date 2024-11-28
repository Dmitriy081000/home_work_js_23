// let arr = [1, 2, 3];
// let fruits = ['apple', 'kiwi', 'cherry', 'bananas', 'plum', 'orange'];
// document.write(`<p> ${fruits} <p>`);

// fruits[2] = 'pear';
// document.write(`<p> ${fruits} <p>`)

// fruits[fruits.length - 1] = 'lemon';
// document.write(`<p> ${fruits} <p>`);

// document.write(`<p> ${fruits.pop()} <p>`);
// document.write(`<p> ${fruits} <p>`);

// document.write(`<p> ${fruits.shift()} <p>`);
// document.write(`<p> ${fruits} <p>`);

// document.write(`<p> ${fruits.push("grapefruit", 'KIWI')} <p>`);
// document.write(`<p> ${fruits} <p>`);

// document.write(`<p> ${fruits.unshift("apple", 'lemon')} <p>`);
// document.write(`<p> ${fruits} <p>`);

// document.write(`<p> ${fruits.splice(1, 2, 'coconut', 'mango')} <p>`);
// document.write(`<p> ${fruits} <p>`);

// document.write(`<p> ${fruits.reverse()} <p>`);
// document.write(`<p> ${fruits} <p>`);

// document.write(`<p> ${fruits.join(' - ')} <p>`);
// document.write(`<p> ${fruits.slice(1, 3)} <p>`);

// let arr2 = fruits.join(' - ')
// document.write(`<p> ${arr2} <p>`);

// let arr3 = fruits.slice(1, 3)
// document.write(`<p> ${arr3} <p>`);


// for(let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i])
// };

// let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
// arr4.sort()
// document.write(`<p> ${arr4} <p>`)

// arr4.sort(function(a, b) {
//   return a - b
// })

// document.write(`<p> ${arr4} <p>`)

// arr4.forEach(function(item, i, arr4){
//   document.write(`<p style ="color: green"> ${item} ${i} ${arr4}<p>`)
// });

// arr = arr.concat(arr2, [1,2,3,4,5, 'fsadf'], 'asfa, 5555')
// document.write(`<p> ${arr} <p>`);


// let students = ["Dmitriy","Dmitriy","Toha","Max","Andrey"]

// // let from = prompt("number from 0 to 4");
// // let to = prompt("number from 0 to 4");
// // let res = students.splice(from, to);
// // document.write(`<p> ${res.join("<br>")} </p>`)



// let a = prompt("Хто наступний?");
// let b = students.push(a)
// document.write(`<p> ${students.join(' ')} <p>`);



// let arr5 = [1, 2, 3, 4, 5, 6, 7];

// let input = prompt("number");

// while(input !== null) {
//   arr5 = arr5.concat(input);
//   input = prompt("number");
// }

// document.write(`<p>${arr5}<p>`)


// let arr6 = [1, 2, 3, 4, 5, 6, 7];

// arr6 = arr6.splice(1, -2);
// document.write(`<p> ${arr6} <p>`);



// let students = ["Dmitriy","Dmitriy","Toha","Max","Andrey","Pilip","Karck", "Jeck", "Stiwe"];

// function getRandom (arr) {
//   for(let i = arr.length - 1; i > 0; i--){
//     let randomIndex = Math.floor(Math.random() * arr.length);
//     let index = arr[randomIndex];
//     arr[randomIndex] = arr[i]
//     arr[i] = index;
//     console.log(index, arr[i], arr[randomIndex])

//     document.write(`<p> ${arr} <p>`);
//     arr.length = arr.length - 1;
//   }
//   return arr
// }
// getRandom(students)



//============================================dz======================

/*
 * #1
 *
 * Розробити функцію, яка використовує метод reduce масиву для обчислення суми усіх елементів масиву чисел.
 Функція повинна приймати масив чисел та повертати їх суму.
*/

function sumArray(numbers) {
    return numbers.reduce(function(sum, item) {
        return sum + item
    }, 0);
    // code here
  }
  
//   Використання функції
  const exampleArray = [1, 2, 3, 4, 5]
  const sum = sumArray(exampleArray)
  console.log('Сума елементів масиву:', sum) // Виведення суми
  
  
  /*
   * #2
   *
   * Розробити функцію, яка використовує метод map масиву для створення нового масиву, в якому кожен елемент буде вдвічі більшим за елементи вхідного масиву чисел.
  */

  function doubleArrayElements(numbers) {
    return numbers.map((item) => item * 2)

  }
  
  // Використання функції
  const exampleArray2 = [1, 2, 3, 4, 5]
  const doubledArray = doubleArrayElements(exampleArray)
  console.log('Подвоєні елементи масиву:', doubledArray) // Виведення подвоєних елементів
  
  
  /*
   * #3
   *
   * Розробити клас `SkillsManager`, що відповідає за управління списком навичок. Клас повинен включати:
   * 1. Конструктор:
   * - Ініціалізує порожній масив `skills`, який буде використовуватися для зберігання навичок.
   * 2. Метод `addSkill(skill)`:
   * - Приймає один аргумент `skill` (рядок).
   * - Перевіряє, чи аргумент є рядком і має мінімум два символи.
   * - Якщо умови виконані, додає `skill` до масиву `skills` і повертає додану навичку.
   * - Якщо умови не виконані (навичка не є рядком або має менше двох символів), повертає `null`.
   * 3. Метод `getAllSkills()`:
   *   - Повертає поточний масив усіх навичок, збережених у класі.
   *
   * Загальні вимоги:
   * - Клас має бути модульним і здатним до використання в інших частинах програми, тому він повинен бути експортований.
   * - Клас має забезпечувати легке управління навичками, включаючи додавання нових навичок та отримання списку всіх наявних навичок.
   * - Код має бути написаний з урахуванням принципів чистого коду, забезпечуючи читабельність та легкість підтримки.
  */
  
//   class SkillsManager {
//     constructor(){
//         this.skills = []
//     }

//     addSkill(skill){
//         if(typeof skill === "string" && skill.length > 1){
//             this.skills.push(skill)
//             return skill
//         } else {
//             return null
//         }
//     };
//     getAllSkills(){
//         return this.skills
//     }
//   }
  
//   const skillsManager = new SkillsManager()
  
//   console.log(skillsManager.addSkill('JavaScript'))
//   console.log(skillsManager.addSkill('CSS'))
//   console.log(skillsManager.getAllSkills())
  
  
  /*
   * #4
   * Задача: Калькулятор дат.
   * Завдання: Створити модуль на JavaScript, який імплементує функцію-конструктор DateCalculator для створення об'єктів, здатних керувати датами. Калькулятор дат має надавати такі можливості:
   * Додавання днів: Метод addDays приймає кількість днів як аргумент і додає цю кількість до поточної дати об'єкта.
   * Віднімання днів: Метод subtractDays приймає кількість днів як аргумент і віднімає цю кількість від поточної дати об'єкта.
   * Отримання результату: Метод getResult повертає поточну дату об'єкта у форматі "YYYY-MM-DD".
   *
   * Критерії перевірки:
   * В модулі має бути визначена функція-конструктор DateCalculator, яка ініціалізує об'єкт з початковою датою.
   * Мають бути реалізовані та доступні методи addDays, subtractDays, та getResult для екземплярів DateCalculator.
   * Об'єкти DateCalculator мають створюватися за допомогою ключового слова new і використання функції-конструктора.
   */
  
  function DateCalculator(initialDate) {
    let date = new Date(initialDate)

    this.addDays = function(days) {
      date.setDate(date.getDate() + days)
    }
  
    this.subtractDays = function(days) {
        date.setDate(date.getDate() - days)
    }
  
    this.getResult = function() {
      return `${date.getFullYear()} - ${date.getMonth() + 1} - ${date.getDate()}`
    }
  }
  
//   Демонстрація використання
  const dateCalculator = new DateCalculator('2023-01-01')
  dateCalculator.addDays(5)
  console.log(dateCalculator.getResult()) // Виводить нову дату після додавання днів
  
  dateCalculator.subtractDays(3)
  console.log(dateCalculator.getResult()) // Виводить нову дату після віднімання днів
  
//   export { doubleArrayElements, sumArray, SkillsManager, DateCalculator }
  