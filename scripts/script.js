const Boundaries = document.querySelectorAll('.boundary')


function lose(){
    alert("You Lost");
}


for (let i=0;i<Boundaries.length;i++){
    Boundaries[i].addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "#eeeeee";
    lose();
    });
}


