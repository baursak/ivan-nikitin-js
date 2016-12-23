function showString(param) {
    document.write(
        '<span style="color:' + param.color + '">' + param.string + '</span>');
}
showString({color: 'red', string: 'Hello world'});