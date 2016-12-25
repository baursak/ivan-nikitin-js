window.onload = function () {
    showTime();
    setInterval('showTime()', 1000);
};
function showTime(){
    var h1 = document.getElementsByTagName('h1')[0];
    h1.innerHTML = 'Current time is ' + new Date().toLocaleTimeString();
}
