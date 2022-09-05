var button = document.querySelector('.menu');
var peach = document.querySelector('.peach');
var black = document.querySelector('.black');
document.getElementById("open-btn").style.display = "inherit";
var menuStatus = false;
button.addEventListener('click', function () {
    if (!menuStatus) {
        document.getElementById("submenu").style.display = "inherit";
        peach.classList.add('open');
        black.classList.add('open');
        menuStatus = true;
        setTimeout(function () { document.getElementById("open-btn").style.display = "none"; document.getElementById("close-btn").style.display = "inherit"; }, 1500);
    }
    else {
        peach.classList.remove('open');
        black.classList.remove('open');
        menuStatus = false;
        setTimeout(function () { document.getElementById("open-btn").style.display = "inherit"; document.getElementById("close-btn").style.display = "none"; }, 1500);
        setTimeout(function () { document.getElementById("submenu").style.display = "none"; }, 2800);
    }
});
