var students = [
    {name: "John", mark: 5},
    {name: "Jane", mark: 3},
];

// хитрая пользовательская функция сравнения для правильной числовой сортировки
function myCompare(a, b){
    return a.mark - b.mark;
}

// сортировка по конкретному свойству
console.log(students.sort(myCompare));

/*
 * сортировка в обратном порядке:
 * сначала отсортировать в прямом порядке
 * а затем запустить функцию reverse()
 */

console.log(students.sort(myCompare).reverse());
