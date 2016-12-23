/*
 * home work
 */
var dates = [];
var i;
for (i = 1; i <= 10; i++) {
    dates.push(new Date(2016, 11, i));
}
console.log(dates);
var days = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
];
for (j in dates) {
    document.write(dates[j].toLocaleDateString()
        + ' - ' + days[dates[j].getDay()]
        + '<br>');
}