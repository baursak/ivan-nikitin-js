function MyDate() {
    this.date = 28,
        this.month = 1,
        this.year = 2013,
        this.toString = function () {
            return this.date + "." + this.month + "." + this.year;
        }
};
var d = new MyDate();
console.log("Today is " + d);
var i;
for(i in d){
    document.write(i);
    document.write(" : ");
    document.write(d[i]);
    document.write("<br>");
}