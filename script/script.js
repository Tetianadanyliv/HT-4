// // Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом. У вас
// // повинен вийти вкладений масив з парами студентів: [["Олександр", "Олена"], [..],
// // [...]];
const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];

function getPairs(array = []) {
  const studPairs = [];
  {
    studPairs.push(
      [students[0], students[2]],
      [students[1], students[3]],
      [students[4], students[5]]
    );
    return studPairs;
  }
}
console.log(getPairs(students));

// Зіставте пари з попереднього завдання та теми проєктів, над якими студенти
// будуть працювати. Повинен вийти вкладений масив виду: [["Олександр і Олена",
// "Теорія автоматів"], [...], [...]]

const themes = [
  "Диференційне рівняння",
  "Теорія автоматів",
  "Алгоритми та структури даних",
];

const studProjects = (stud, theme) => {
  const newstudPairs = getPairs(stud.slice());
  const themes = theme.slice();
  let result = [];
  for (let i = 0; i < newstudPairs.length; i++) {
    result.push([newstudPairs[i].join(" i "), themes[i]]);
  }
  return result;
};
console.log(studProjects(students, themes));

// Зіставте оцінки(marks) зі студентом(students): [["Саша", 4], [...], [...]]

const marks = [4, 5, 5, 3, 4, 5];
const getMarks = () => {
  let result = [];
  for (let i = 0; i < students.length; i++) {
    result.push([students[i], marks[i]]);
  }
  return result;
};
console.log(getMarks(students, marks));

// Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт(тут функція буде
//   нечистою, але не повинна мутувати массив): [["Олександр і Олена", "Теорія
// автоматів", 5], [...], [...]]

function getRendomMark(studProjects) {
  let result = [];
  for (let i = 0; i < studProjects.length; i++) {
    const randomMark = (Math.random() * (5 - 1) + 1).toFixed(0);
    result.push([studProjects[i], randomMark]);
  }
  return result;
} 
console.log(getRendomMark(studProjects(students, themes)));

