function showString(param) {
    if (!param) param = new Object();
    if (!param.color) param.color = 'black';
    if (!param.string) param.string = 'Hello';
    document.write(
        '<span style="color:' + param.color + '">' + param.string + '</span><br>');
}
showString({color: 'red', string: 'Hello world'});
showString({color: 'red'});
showString({string: 'Hello John'});
showString();