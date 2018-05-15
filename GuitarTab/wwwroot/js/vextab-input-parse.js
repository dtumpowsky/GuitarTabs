var wholeNote= ":w "
var halfNote = ":h "
var quarterNote = ":q "
var eighthNote = ":8 "
var sixteenthNote = ":16 "
var thirtySecondNote = ":32 "
var quarterRest = ":4 ## "
var eighthRest = ":8 ## "

var songArr = [];
var noteType = "";
var noteFret = "";
var noteString = "";


function ChooseNoteType(currentNoteType){
  noteType = currentNoteType;
  console.log(noteType);
}
function ChooseNoteFret(){
  noteFret = document.getElementById("guitar-fret-selection").value;
  console.log(noteFret);
}
function ChooseNoteString(){
  noteString = document.getElementById("guitar-string-selection").value;
  console.log(noteString);
}
function ConstructNote(){
  finalNote = noteType + noteFret + "/" + noteString;
  songArr.push(finalNote);
  console.log(finalNote);
}



$(document).ready(function(){
  // $("#note-form").submit(function(event) {
  // event.preventDefault();





    $("button#whole-note").click(function(event) {
      currentNoteType = wholeNote;
      ChooseNoteType(currentNoteType);
      });
    $("button#half-note").click(function(event) {
      currentNoteType = halfNote;
      ChooseNoteType(currentNoteType);
      });
    $("button#quarter-note").click(function(event) {
      currentNoteType = quarterNote;
      ChooseNoteType(currentNoteType);
      });
    $("button#eighth-note").click(function(event) {
      currentNoteType = eighthNote;
      ChooseNoteType(currentNoteType);
      });
    $("button#sixteenth-note").click(function(event) {
      currentNoteType = sixteenthNote;
      ChooseNoteType(currentNoteType);
      });
    $("button#thirty-second-note").click(function(event) {
      currentNoteType = thirtySecondNote;
      ChooseNoteType(currentNoteType);
      });
    $("button#quarter-rest").click(function(event) {
      currentNoteType = quarterRest;
      ChooseNoteType(currentNoteType);
      });
    $("button#eighth-rest").click(function(event) {
      currentNoteType = eighthRest;
      ChooseNoteType(currentNoteType);
      });

    $("button#add-note").click(function(event) {
        console.log(noteType);
        console.log(noteFret);
        console.log(noteString);
        ConstructNote();
      });




  // });
});