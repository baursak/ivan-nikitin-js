var d = {
    date: 28,
    month: 1,
    year: 2013,
    toString: function () {
        return this.date + "." + this.month + "." + this.year;
    }
};
console.log("Today " + d);