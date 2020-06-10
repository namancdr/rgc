const btn = document.getElementById("btn")
const color = document.getElementById("color")

const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

btn.addEventListener("click", function(){

    let hexcolor = "#";
    
    for(let i=0; i<6; i++){
        hexcolor += colors[getRandomNumber()]
    }

    color.textContent = hexcolor;
    document.body.style.backgroundColor = hexcolor;
});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length)
}