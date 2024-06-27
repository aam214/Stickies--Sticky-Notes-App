let notesContainer = document.querySelector(".notes-container");
let textContainer = document.querySelector(".text-container");
let proceed = document.getElementById("proceed");
let exit = document.getElementById("exit");

var i = 0;

exit.addEventListener("click", () => {
exitNote();
})


proceed.addEventListener("click", () => {
createNote();
})

function exitNote(){

}

function createNote(){
  
}

function margin(){
let margins = ["-5px","1px","5px","10px","15px","20px"]

return margins[Math.floor(Math.random() * margins.length)];
}
function rotate(){

}
function color(){

}