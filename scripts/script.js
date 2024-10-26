const Boundaries = document.querySelectorAll('.boundary')

for (let i=0;i<Boundaries.length;i++){
    Boundaries[i].addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "#eeeeee";
    event.target.textContent = "NOOOOOOOOO"
    });
}

