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
  if (textContainer.style.display == "none"){
    textContainer.style.display = "block";
  }else{
   textContainer.style.display = "none";
  
  }
}

function margin(){
let margins = ["-5px","1px","5px","10px","15px","20px"]
return margins[Math.floor(Math.random() * margins.length)];
}
function rotate(){
  let rotations =["rotate(3deg)", "rotate(1deg)", "rotate(-1deg)", "rotate(-3deg)", "rotate(-5deg)", "rotate(-8deg)"];
  return rotations[Math.floor(Math.random() * rotations.length)];
}
function color(){
  let randomColors = ["#F7567C", "#99E1D9", "#93FF96", "#F79400", "#A833B9", "#C493FF"]
if (i> randomColors.length - 1){
  i = 0;
}
return randomColors[i++];
}