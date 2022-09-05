const button = document.querySelector('.menu');
const peach = document.querySelector('.peach');
const black = document.querySelector('.black');

document.getElementById("open-btn").style.display = "inherit";

let menuStatus: boolean = false;
button.addEventListener('click', () => {
    if(!menuStatus) {
        document.getElementById("submenu").style.display = "inherit";
        peach.classList.add('open');
        black.classList.add('open');
        menuStatus = true;
        setTimeout(() => {document.getElementById("open-btn").style.display = "none"; document.getElementById("close-btn").style.display = "inherit";}, 1500);
    } else {
        peach.classList.remove('open');
        black.classList.remove('open');
        menuStatus = false;
        setTimeout(() => {document.getElementById("open-btn").style.display = "inherit"; document.getElementById("close-btn").style.display = "none";}, 1500);
        setTimeout(() => {document.getElementById("submenu").style.display = "none";}, 2800)
    }
});
