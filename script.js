window.onload = function () {
    var img = document.getElementsByTagName('img')[0];
    img.id = 'myImg';
    img.onclick = function () {
        increaseSize();
    };
};
function increaseSize() {
    var myImg = document.getElementById('myImg');
    var fullWidth = myImg.getAttribute('data-width');
    var fullHeight = myImg.getAttribute('data-height');
    var width = myImg.width;
    var height = myImg.height;
    if (width < fullWidth || height < fullHeight) {
        // уеличиваем размеры
        myImg.width = ++width;
        myImg.height = ++height;
        setTimeout('increaseSize()', 50);
    }
}