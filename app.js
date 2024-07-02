const notesContainer = document.querySelector(".notes-container");
const textContainer = document.querySelector(".text-container");
const proceed = document.getElementById("proceed");
const exit = document.getElementById("exit");

var i = 0;

exit.addEventListener("click", () => {
typeNote();
})
proceed.addEventListener("click", () => {
createNote();
})

function exitNote(){

}

function createNote(){
let noteText = document.getElementById("note-text").value;
let textBox1 = document.createElement("div");
let box2 = document.createElement("h2");

textBox1.innerHTML = noteText;
textBox1.setAttribute
("style", "width:370px; margin: 28px; height: 370px; font-size:30px; padding: 25px; margin-top: 10px;box-shadow:0px 10px 24px 0px rgba(0,0,0,0.75)")


textBox1.appendChild(box2);
textBox1.style.margin = margin();
textBox1.style.transform = rotate();
textBox1.style.background= color();
notesContainer.insertAdjacentElement("beforeend", textBox1);

textBox1.addEventListener("dblclick", () =>{
  textBox1.remove();
})

document.getElementById("note-text").value = "";
}
function typeNote(){
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