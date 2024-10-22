const notesContainer = document.querySelector(".notes-container");
const textContainer = document.querySelector(".text-container");
const proceed = document.getElementById("proceed");
const exit = document.getElementById("exit");

let i = 0;

exit.addEventListener("click", () => {
typeNote();
})
proceed.addEventListener("click", () => {
saveNote();
})

function exitNote(){
}

function saveNote(){
let noteText = document.getElementById("note-text").value;
let stickyNote = document.createElement("div");
let newBox = document.createElement("div");

stickyNote.innerHTML = noteText;
stickyNote.classList.add("sticky-style");
stickyNote.classList.add("sticky-style:hover");

stickyNote.appendChild(newBox);
stickyNote.style.margin = margin();
stickyNote.style.transform = rotate();
stickyNote.style.background= color();
notesContainer.insertAdjacentElement("beforeend", stickyNote);
stickyNote.addEventListener("mouseover", () => {
  stickyNote.style.transform = "scale(1.2)"; 
});

stickyNote.addEventListener("mouseout", () => {
  stickyNote.style.transform = "scale(1)"; 
});
stickyNote.addEventListener("click", () =>{
  stickyNote.remove();
});
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
