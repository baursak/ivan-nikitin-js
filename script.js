var d = new Object();
d.day = 31;
d.month = 3;
d.year = 2013;
d.toString = function () {
    return this.day + '.' +
        this.month + '.' +
        this.year;
}
d.write = function () {
    document.write(this.day + '.' +
        this.month + '.' +
        this.year);
}
//d.write();
alert("today" + d);