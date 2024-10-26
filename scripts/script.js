const Boundaries = document.querySelectorAll('.boundary');
const Status = document.getElementById('status');
const Start = document.getElementById('start');
const End = document.getElementById('end');

function lose() {
    for (let i = 0; i < Boundaries.length; i++) {
        Boundaries[i].style.backgroundColor = "#red"
    }
    Status.textContent = "You Lost 😒😒";
    alert("You Lost");
}

function win() {
    Status.textContent = "You Win 😍😍";
    alert("You Win");
}

for (let i = 0; i < Boundaries.length; i++) {
    Boundaries[i].addEventListener("mouseover", lose);
}

End.addEventListener("mouseover", win);

Start.addEventListener("mouseover", () => {
    Status.textContent = "Ready Set Goooo 🏁";
});