const textel = document.getElementById('text')
const speedel = document.getElementById('speed')


const text = "Hello World";
let speed = 300/speedel.value;


let charectorID = 1;

writeText();

function writeText(){
    textel.innerHTML = text.slice(0,charectorID);
    charectorID++;

    if(charectorID>text.length){
        charectorID=1;
    }
    setTimeout(writeText,speed)
}

speedel.addEventListener('input',(e)=>{
    speed = 300/e.target.value;
})