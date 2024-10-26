const Boundaries = document.querySelectorAll('.boundary')
const Status = document.getElementById('status')
const Start = document.getElementById('start')
const End = document.getElementById('end')


function lose(){
    Status.textContent = "You Lost😒😒"
    alert("You Lost");
}

function win(){
    Start.addEventListener("mouseover", event =>{
        Status.textContent = "You Win😍😍"
         alert("You Win");
    })
}


for (let i=0;i<Boundaries.length;i++){
    Boundaries[i].addEventListener("mouseover", event => {
    lose()
    });
}


