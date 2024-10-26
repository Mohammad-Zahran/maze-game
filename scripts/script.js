const Boundaries = document.querySelectorAll('.boundary');
const Status = document.getElementById('status');
const Start = document.getElementById('start');
const End = document.getElementById('end');

function ResetGame(){

    for (let i = 0; i < Boundaries.length; i++) {
        Boundaries[i].style.backgroundColor = ""
    }
    Status.textContent = "Begin by moving your mouse over the 'S'.";

    document.body.style.backgroundColor = ""
}

function lose() {
    for (let i = 0; i < Boundaries.length; i++) {
        Boundaries[i].style.backgroundColor = "red"
    }
    document.body.style.backgroundColor = "orange"; 
    Status.textContent = "You Lost 😒😒";
    setTimeout(ResetGame, 3000);
}

function win() {
    for (let i = 0; i < Boundaries.length; i++) {
        Boundaries[i].style.backgroundColor = "#8888ff"
    }
    document.body.style.backgroundColor = "green";
    Status.textContent = "You Win 😍😍";
    setTimeout(ResetGame, 3000);
}

for (let i = 0; i < Boundaries.length; i++) {
    Boundaries[i].addEventListener("mouseover", lose);
}


End.addEventListener("mouseover", win);

Start.addEventListener("mouseover", () => {
    Status.textContent = "Ready Set Goooo 🏁";
});